// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IMessageStructure {
    struct Message {
        string swapType;
        string base; // MTS
        string quote; // TOTM
        uint256 amount; // metis amount
        uint256 fee; // fee in totem
        uint256 exchange; // totem amount
        uint256 nonce;
        uint256 deadline;
        address account;    
    }

    struct DomainSeparator {
        string name;
        string version;
        uint256 chainId;
        address verifyingContract;
    }
}
