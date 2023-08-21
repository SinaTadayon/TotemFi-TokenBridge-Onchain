// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "../interfaces/IPeggedTotemToken.sol";
import "../interfaces/IMessageStructure.sol";
import "../libraries/VerifySignature.sol";

contract MetisBridgeAgentStorageStructure is
    IMessageStructure,
    Initializable,
    ContextUpgradeable
{
    struct SwapData {
        bytes32 txHash;
        uint256 nonce;
        uint256 exchange;
        string swapType;
        bool isFilled;
        bool isClaimed;
    }

    address public metisBridgeAgentImpl;
    address public proxyAdmin;
    address public peggedTotemTokenProxy;
    address payable public owner;

    bool public upgradeEnabled;

    // Message public message;
    DomainSeparator public domain;

    mapping(address => uint256) public swapNonce;
    /**
     * @dev This will be set to true if the required amount of pTOTM is minted for the user
     *      the txn hash is from the fillPegIn function from BSCBridgeAgent
     *
     * map (address => mapping(dataHash => SwapData)))
     */
    mapping(address => mapping(bytes32 => SwapData)) public swapDataMap;
}
