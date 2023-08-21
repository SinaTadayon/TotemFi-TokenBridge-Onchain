// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "./IMessageStructure.sol";

interface IMetisBridgeAgent {
    event swapStarted(
        address indexed spender,
        bytes32 indexed dataHash,
        string swapType,
        string base,
        string quote,
        uint256 amount,
        uint256 fee,
        uint256 exchange,
        uint256 nonce,
        uint256 deadline
    );

    event swapFilled(
        address indexed recipient,
        bytes32 indexed bscTxHash,
        bytes32 indexed dataHash,
        string swapType,
        uint256 fee,
        uint256 exchange
    );

    event swapClaimed(
        address indexed recipient,
        bytes32 indexed dataHash,
        string swapType,
        uint256 exchange
    );

    function pegInMTS2TOTM(
        IMessageStructure.Message memory message,
        bytes memory signature
    ) external payable;

    function fillMTS2TOTMPegIn(
        address recipient,
        bytes32 dataHash,
        bytes32 bscTxHash,
        string memory swapType,
        uint256 fee,
        uint256 exchange
    ) external;

    function claimMTS2TOTMPegIn(bytes32 dataHash) external;

    function mtsBalance() external returns (uint256);

    function mtsWithdraw() external;

    function setNonce(address, uint256) external;

    function setFill(address account, bytes32 dataHash, bool fillStat) external;

    function setClaim(address account, bytes32 dataHash, bool claimStat) external;
}
