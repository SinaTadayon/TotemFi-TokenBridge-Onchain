// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../libraries/VerifySignature.sol";
import "../interfaces/IMessageStructure.sol";

contract SignatureVerification {
    IMessageStructure.Message public message;
    IMessageStructure.DomainSeparator public domain;

    function setMessage(
        address account,
        uint256 amount,
        uint256 fee,
        uint256 exchange,
        uint256 nonce,
        uint256 deadline,
        string memory swapType,
        string memory base,
        string memory quote
    ) public {
        message = IMessageStructure.Message({
            account: account,
            amount: amount,
            fee: fee,
            exchange: exchange,
            nonce: nonce,
            deadline: deadline,
            swapType: swapType,
            base: base,
            quote: quote
        });
    }

    function setDomain(
        string memory name,
        string memory version,
        uint256 chainId,
        address verifyingContract
    ) public {
        domain = IMessageStructure.DomainSeparator({
            chainId: chainId,
            verifyingContract: verifyingContract,
            name: name,
            version: version
        });
    }

    function verify(address _signer, bytes memory _signature)
        public
        view
        returns (bool)
    {
        return VerifySignature.verify(_signer, message, domain, _signature);
    }
}
