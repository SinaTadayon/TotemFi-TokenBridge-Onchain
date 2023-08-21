// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "../interfaces/IMessageStructure.sol";
import "../interfaces/IPancakeRouter.sol";
import "../interfaces/IPancakePair.sol";
import "../libraries/VerifySignature.sol";

contract BSCBridgeAgentStorageStructure is
    IMessageStructure,
    Initializable,
    ContextUpgradeable
{
    struct SwapData {
        uint256 nonce;
        uint256 exchange;
        string swapType;
    }

    address public bscBridgeAgentImpl;
    address public proxyAdmin;
    address public owner;
    address public wbnb;
    address public totemToken;
    address public pancakeswapRouter;
    address public pancakePair;

    uint256 public slippagePercentage;

    bool public upgradeEnabled;

    // Message public message;
    // DomainSeparator public domain;

    /*
     * map (address => mapping(txhash => SwapData)))
     */
    mapping(address => mapping(bytes32 => SwapData)) public swapDataMap;
}
