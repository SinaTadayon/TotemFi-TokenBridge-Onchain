// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "./MetisBridgeAgentStorageStructure.sol";
import "../interfaces/IMetisBridgeAgent.sol";

contract MetisBridgeAgentImpl is
    MetisBridgeAgentStorageStructure,
    IMetisBridgeAgent
{
    using SafeERC20Upgradeable for IPeggedTotemToken;

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

    function pegInMTS2TOTM(Message memory message, bytes memory signature)
        external
        payable
        notContract
    {
        require(msg.value >= message.amount, "wrong metis amount");
        require(
            _msgSender() == message.account,
            "user is not allowed to use this signature"
        );

        require(
            VerifySignature.verify(owner, message, domain, signature),
            "Wrong transaction"
        );

        require(message.deadline >= block.timestamp, "deadline has passed");
        require(message.nonce == swapNonce[msg.sender] + 1, "wrong nonce");

        SwapData memory swapData = SwapData({
            txHash: 0x00,
            nonce: message.nonce,
            exchange: message.exchange,
            swapType: message.swapType,
            isFilled: false,
            isClaimed: false
        });

        bytes32 dataHash = _getDataHash(message);
        swapDataMap[message.account][dataHash] = swapData;

        swapNonce[_msgSender()] = message.nonce;

        emit swapStarted(
            message.account,
            dataHash,
            message.swapType,
            message.base,
            message.quote,
            message.amount,
            message.fee,
            message.exchange,
            message.nonce,
            message.deadline
        );
    }

    function fillMTS2TOTMPegIn(
        address recipient,
        bytes32 dataHash,
        bytes32 bscTxHash,
        string memory swapType,
        uint256 fee,
        uint256 exchange
    ) external onlyOwner {
        require(bscTxHash != 0x00, "wrong txhash");
        require(
            swapDataMap[recipient][dataHash].nonce > 0,
            "request not registered"
        );
        require(
            !swapDataMap[recipient][dataHash].isFilled,
            "request already filled"
        );

        IPeggedTotemToken(peggedTotemTokenProxy).mintTo(
            address(this),
            exchange
        );

        swapDataMap[recipient][dataHash].txHash = bscTxHash;
        swapDataMap[recipient][dataHash].isFilled = true;
        swapDataMap[recipient][dataHash].exchange = exchange;

        emit swapFilled(
            recipient,
            bscTxHash,
            dataHash,
            swapType,
            fee,
            exchange
        );
    }

    function claimMTS2TOTMPegIn(bytes32 dataHash) external {
        require(
            swapDataMap[_msgSender()][dataHash].nonce > 0,
            "request not registered"
        );
        require(
            !swapDataMap[_msgSender()][dataHash].isClaimed,
            "request already claimed"
        );

        uint256 amount = swapDataMap[_msgSender()][dataHash].exchange;

        swapDataMap[_msgSender()][dataHash].isClaimed = true;

        IPeggedTotemToken(peggedTotemTokenProxy).safeTransfer(
            _msgSender(),
            amount
        );

        emit swapClaimed(
            _msgSender(),
            dataHash,
            swapDataMap[_msgSender()][dataHash].swapType,
            swapDataMap[_msgSender()][dataHash].exchange
        );
    }

    function mtsBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function mtsWithdraw() external onlyOwner {
        owner.transfer(mtsBalance());
    }

    function setNonce(address account, uint256 nonce) external onlyOwner {
        swapNonce[account] = nonce;
    }

    function setFill(
        address account,
        bytes32 dataHash,
        bool fillStat
    ) external onlyOwner {
        swapDataMap[account][dataHash].isFilled = fillStat;
    }

    function setClaim(
        address account,
        bytes32 dataHash,
        bool claimStat
    ) external onlyOwner {
        swapDataMap[account][dataHash].isClaimed = claimStat;
    }

    function _getDataHash(Message memory message)
        internal
        pure
        returns (bytes32)
    {
        return
            keccak256(
                abi.encodePacked(
                    keccak256(abi.encode(message.swapType)),
                    keccak256(abi.encode(message.base)),
                    keccak256(abi.encode(message.quote)),
                    message.amount,
                    message.fee,
                    message.exchange,
                    message.nonce,
                    message.deadline,
                    message.account
                )
            );
    }
}
