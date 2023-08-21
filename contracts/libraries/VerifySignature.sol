// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "../interfaces/IMessageStructure.sol";

library VerifySignature {
    bytes32 private constant EIP712_DOMAIN_TYPEHASH =
        keccak256(
            "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
        );

    bytes32 private constant MESSAGE_TYPEHASH =
        keccak256(
            "Bridge(string swapType,address account,string base,string quote,uint256 fee,uint256 amount,uint256 exchange,uint256 deadline,uint256 nonce)"
        );

    function getMessageHash(IMessageStructure.Message memory _message)
        internal
        pure
        returns (bytes32)
    {
        return
            keccak256(
                abi.encode(
                    MESSAGE_TYPEHASH,
                    keccak256(abi.encodePacked(_message.swapType)),
                    _message.account,
                    keccak256(abi.encodePacked(_message.base)),
                    keccak256(abi.encodePacked(_message.quote)),
                    _message.fee,
                    _message.amount,
                    _message.exchange,
                    _message.deadline,
                    _message.nonce
                )
            );
    }

    function getDomainSeparatorHash(
        IMessageStructure.DomainSeparator memory _domain
    ) internal pure returns (bytes32) {
        return
            keccak256(
                abi.encode(
                    EIP712_DOMAIN_TYPEHASH,
                    keccak256(abi.encodePacked(_domain.name)),
                    keccak256(abi.encodePacked(_domain.version)),
                    _domain.chainId,
                    _domain.verifyingContract
                )
            );
    }

    function getEthSignedMessageHash(bytes32 _domainHash, bytes32 _messageHash)
        internal
        pure
        returns (bytes32)
    {
        return
            keccak256(abi.encodePacked("\x19\x01", _domainHash, _messageHash));
    }

    function verify(
        address _signer,
        IMessageStructure.Message memory _message,
        IMessageStructure.DomainSeparator memory _domain,
        bytes memory signature
    ) internal pure returns (bool) {
        bytes32 domainHash = getDomainSeparatorHash(_domain);
        bytes32 messageHash = getMessageHash(_message);
        bytes32 ethSignedMessageHash = getEthSignedMessageHash(
            domainHash,
            messageHash
        );

        return recoverSigner(ethSignedMessageHash, signature) == _signer;
    }

    function recoverSigner(
        bytes32 _ethSignedMessageHash,
        bytes memory _signature
    ) internal pure returns (address) {
        (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);

        return ecrecover(_ethSignedMessageHash, v, r, s);
    }

    function splitSignature(bytes memory sig)
        internal
        pure
        returns (
            bytes32 r,
            bytes32 s,
            uint8 v
        )
    {
        require(sig.length == 65, "invalid signature length");

        assembly {
            /*
            First 32 bytes stores the length of the signature

            add(sig, 32) = pointer of sig + 32
            effectively, skips first 32 bytes of signature

            mload(p) loads next 32 bytes starting at the memory address p into memory
            */

            // first 32 bytes, after the length prefix
            r := mload(add(sig, 32))
            // second 32 bytes
            s := mload(add(sig, 64))
            // final byte (first byte of the next 32 bytes)
            v := byte(0, mload(add(sig, 96)))
        }

        // implicitly return (r, s, v)
    }
}
