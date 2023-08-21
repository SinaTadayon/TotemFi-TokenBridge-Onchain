// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "./PeggedTotemTokenStorageStructure.sol";

contract PeggedTotemTokenProxy is PeggedTotemTokenStorageStructure {
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

    function upgradeTo(address _newPeggedTotemTokenImpl) external onlyOwner {
        require(upgradeEnabled, "Upgrade is not enabled yet");
        require(
            peggedTotemTokenImpl != _newPeggedTotemTokenImpl,
            "Is already the implementation"
        );
        _setPeggedTotemTokenImpl(_newPeggedTotemTokenImpl);
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
        string memory _symbol,
        address _taxationWallet
    ) public initializer onlyOwner {
        ERC20Upgradeable.__ERC20_init_unchained(_name, _symbol);
        AccessControlUpgradeable.__AccessControl_init();

        AccessControlUpgradeable._setupRole(ADMIN_ROLE, _msgSender());
        AccessControlUpgradeable._setupRole(SWAPPER_ROLE, _msgSender());

        AccessControlUpgradeable._setRoleAdmin(ADMIN_ROLE, ADMIN_ROLE);
        AccessControlUpgradeable._setRoleAdmin(SWAPPER_ROLE, ADMIN_ROLE);

        taxationWallet = _taxationWallet;
    }

    function _setPeggedTotemTokenImpl(address _newPeggedTotemTokenImpl)
        internal
    {
        address oldImpl = peggedTotemTokenImpl;
        peggedTotemTokenImpl = _newPeggedTotemTokenImpl;
        emit ImplementationUpgraded(oldImpl, peggedTotemTokenImpl);
    }

    fallback() external payable {
        address opr = peggedTotemTokenImpl;
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
