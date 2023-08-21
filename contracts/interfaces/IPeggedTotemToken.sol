// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/IAccessControlUpgradeable.sol";
import "./ILocker.sol";

interface IPeggedTotemToken is
    IERC20Upgradeable,
    IAccessControlUpgradeable,
    ILocker
{
    function setLocker(address _locker) external;

    function setTaxRate(uint256 newTaxRate) external;

    function setTaxExemptStatus(address account, bool status) external;

    function setTaxationWallet(address newTaxationWallet) external;

    function transfer(address recipient, uint256 amount)
        external
        returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    function mintTo(address recipient, uint256 amount) external returns (bool);

    function burnFrom(address account, uint256 amount) external returns (bool);
}
