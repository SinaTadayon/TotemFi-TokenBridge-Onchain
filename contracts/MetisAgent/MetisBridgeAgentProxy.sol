// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "./MetisBridgeAgentStorageStructure.sol";

contract MetisBridgeAgentProxy is MetisBridgeAgentStorageStructure {
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
        owner = payable(_msgSender());
    }

    function upgradeTo(address _newMetisBridgeAgentImpl) external onlyOwner {
        require(upgradeEnabled, "Upgrade is not enabled yet");
        require(
            metisBridgeAgentImpl != _newMetisBridgeAgentImpl,
            "Is already the implementation"
        );
        _setMetisBridgeAgentImpl(_newMetisBridgeAgentImpl);
        upgradeEnabled = false;
    }

    function enableUpgrade() external onlyProxyAdmin {
        upgradeEnabled = true;
    }

    function disableUpgrade() external onlyProxyAdmin {
        upgradeEnabled = false;
    }

    function initialize(
        string memory _name,
        string memory _version,
        address _peggedTotemTokenProxy
    ) public initializer onlyOwner {
        ContextUpgradeable.__Context_init();

        domain.name = _name;
        domain.version = _version;
        domain.chainId = block.chainid;
        domain.verifyingContract = address(this);

        peggedTotemTokenProxy = _peggedTotemTokenProxy;
    }

    function _setMetisBridgeAgentImpl(address _newMetisBridgeAgentImpl)
        internal
    {
        address oldImpl = metisBridgeAgentImpl;
        metisBridgeAgentImpl = _newMetisBridgeAgentImpl;
        emit ImplementationUpgraded(oldImpl, metisBridgeAgentImpl);
    }

    fallback() external payable {
        address opr = metisBridgeAgentImpl;
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
