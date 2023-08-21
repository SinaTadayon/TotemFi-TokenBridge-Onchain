// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "./BSCBridgeAgentStorageStructure.sol";

contract BSCBridgeAgentProxy is BSCBridgeAgentStorageStructure {
    event ImplementationUpgraded(address oldImpl, address newImpl);

    modifier onlyProxyAdmin() {
        require(
            _msgSender() == proxyAdmin,
            "can only be called by the proxy admin"
        );
        _;
    }

    modifier onlyOwner() {
        require(_msgSender() == owner, "can only be called by the proxy admin");
        _;
    }

    constructor(address _proxyAdmin) {
        upgradeEnabled = true;
        proxyAdmin = _proxyAdmin;
        owner = _msgSender();
    }

    function upgradeTo(address _newBSCBridgeAgentImpl) external onlyOwner {
        require(upgradeEnabled, "Upgrade is not enabled yet");
        require(
            bscBridgeAgentImpl != _newBSCBridgeAgentImpl,
            "Is already the implementation"
        );
        _setBSCBridgeAgentImpl(_newBSCBridgeAgentImpl);
        upgradeEnabled = false;
    }

    function enableUpgrade() external onlyProxyAdmin {
        upgradeEnabled = true;
    }

    function disableUpgrade() external onlyProxyAdmin {
        upgradeEnabled = false;
    }

    function initialize(
        address _pancakeswapRouter,
        address _pancakePair,
        address _wbnb,
        address _totemToken,
        uint256 _slippagePercentage
    ) public initializer onlyOwner {
        ContextUpgradeable.__Context_init();

        pancakeswapRouter = _pancakeswapRouter;
        pancakePair = _pancakePair;
        wbnb = _wbnb;
        totemToken = _totemToken;

        slippagePercentage = _slippagePercentage;
    }

    function _setBSCBridgeAgentImpl(address _newBSCBridgeAgentImpl) internal {
        address oldImpl = bscBridgeAgentImpl;
        bscBridgeAgentImpl = _newBSCBridgeAgentImpl;
        emit ImplementationUpgraded(oldImpl, bscBridgeAgentImpl);
    }

    fallback() external payable {
        address opr = bscBridgeAgentImpl;
        require(opr != address(0));
        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := delegatecall(gas(), opr, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
            case 0 {
                revert(0, returndatasize())
            }
            default {
                return(0, returndatasize())
            }
        }
    }

    receive() external payable {}
}
