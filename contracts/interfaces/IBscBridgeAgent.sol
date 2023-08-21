// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "./IMessageStructure.sol";

interface IBscBridgeAgent {
    event swapStarted(
        address indexed spender,
        bytes32 indexed metisTxHash,
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
        bytes32 indexed metisTxHash,
        string swapType,
        uint256 amount,
        uint256 fee,
        uint256 exchange,
        uint256 nonce
    );

    function fillBNB2TOTMPegin(
        IMessageStructure.Message memory message,
        bytes32 metisTxHash
    ) external;

    function swapRouterQuery(uint256 amount)
        external
        returns (
            uint256 baseReserved,
            uint256 quoteReserved,
            uint256 exchange
        );

    function bnbBalance() external returns (uint256);

    function bnbWithdraw() external;

    function totemBalance() external view returns (uint256);

    function setSlippagePercentage(uint256 _slippagePercentage) external;

    function setPancakePair(address _pancakePair) external;
}
