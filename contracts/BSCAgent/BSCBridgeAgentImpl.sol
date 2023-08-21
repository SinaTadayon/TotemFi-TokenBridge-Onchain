// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "./BSCBridgeAgentStorageStructure.sol";
import "../interfaces/IBscBridgeAgent.sol";

contract BSCBridgeAgentImpl is BSCBridgeAgentStorageStructure, IBscBridgeAgent {
    using SafeERC20Upgradeable for IERC20Upgradeable;

    modifier onlyOwner() {
        require(_msgSender() == owner, "can only be called by the proxy admin");
        _;
    }

    modifier notContract() {
        require(!isContract(msg.sender), "contract is not allowed to swap");
        require(msg.sender == tx.origin, "no proxy contract is allowed");
        _;
    }

    function isContract(address addr) internal view returns (bool) {
        uint256 size;
        assembly {
            size := extcodesize(addr)
        }
        return size > 0;
    }

    function fillBNB2TOTMPegin(Message memory message, bytes32 metisTxHash)
        external
        onlyOwner
    {
        require(bnbBalance() >= message.amount, "insufficient amount");

        require(message.deadline >= block.timestamp, "deadline has passed");

        require(
            swapDataMap[message.account][metisTxHash].nonce == 0,
            "already registered"
        );

        emit swapStarted(
            message.account,
            metisTxHash,
            message.swapType,
            message.base,
            message.quote,
            message.amount,
            message.fee,
            message.exchange,
            message.nonce,
            message.deadline
        );

        IERC20Upgradeable(wbnb).approve(
            address(pancakeswapRouter),
            message.amount
        );

        (, , uint256 exchangeAmount) = swapRouterQuery(message.amount);

        uint256 exchangeAmountWithSlippage = exchangeAmount -
            (exchangeAmount * slippagePercentage) /
            10000;

        uint256 totalTotemBalance = totemBalance();

        IPancakeRouter02(pancakeswapRouter).swapExactTokensForTokens(
            message.amount,
            exchangeAmountWithSlippage,
            _getPathForWbnb2Totem(),
            address(this),
            message.deadline
        );

        message.exchange = totemBalance() - totalTotemBalance; // the exact totem amount that was bought

        SwapData memory swapData = SwapData(
            message.nonce,
            message.exchange,
            message.swapType
        );

        swapDataMap[message.account][metisTxHash] = swapData;

        emit swapFilled(
            message.account,
            metisTxHash,
            message.swapType,
            message.amount,
            message.fee,
            message.exchange,
            message.nonce
        );
    }

    function swapRouterQuery(uint256 amount)
        public
        view
        returns (
            uint256 baseReserved,
            uint256 quoteReserved,
            uint256 exchange
        )
    {
        uint256[] memory amounts = IPancakeRouter02(pancakeswapRouter)
            .getAmountsOut(amount, _getPathForWbnb2Totem());

        exchange = amounts[1];

        (quoteReserved, baseReserved, ) = IPancakePair(pancakePair)
            .getReserves();
    }

    function _getPathForWbnb2Totem() internal view returns (address[] memory) {
        address[] memory path = new address[](2);
        path[0] = wbnb;
        path[1] = totemToken;

        return path;
    }

    function bnbBalance() public view returns (uint256) {
        return IERC20Upgradeable(wbnb).balanceOf(address(this));
    }

    function bnbWithdraw() external onlyOwner {
        IERC20Upgradeable(wbnb).safeTransfer(owner, bnbBalance());
    }

    function totemBalance() public view returns (uint256) {
        return IERC20Upgradeable(totemToken).balanceOf(address(this));
    }

    function setSlippagePercentage(uint256 _slippagePercentage)
        external
        onlyOwner
    {
        /// @dev it must be in basis points
        slippagePercentage = _slippagePercentage;
    }

    function setPancakePair(address _pancakePair) external onlyOwner {
        pancakePair = _pancakePair;
    }
}
