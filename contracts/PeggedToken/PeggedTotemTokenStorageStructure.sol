// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "../interfaces/ILocker.sol";
import "../libraries/BasisPoints.sol";

contract PeggedTotemTokenStorageStructure is
    ILockerUser,
    ERC20Upgradeable,
    AccessControlUpgradeable
{
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant SWAPPER_ROLE = keccak256("SWAPPER_ROLE");
    uint256 public taxRate = 300;
    bool public upgradeEnabled;
    address public taxationWallet;
    address public peggedTotemTokenImpl;
    address public proxyAdmin;
    address public owner;
    ILocker public override locker;
    mapping(address => bool) public taxExempt;
}
