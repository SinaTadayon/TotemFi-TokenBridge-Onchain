/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IGovernorINN } from "../IGovernorINN";

export class IGovernorINN__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGovernorINN {
    return new Contract(address, _abi, signerOrProvider) as IGovernorINN;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "validatorEOA",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenOffer",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "offchainID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "description",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "startupName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "sharedStake",
        type: "uint16",
      },
    ],
    name: "ExitInvestmentProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "offchainID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "description",
        type: "bytes32",
      },
    ],
    name: "FreezeInvestmentProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalID",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "startupEOA",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenOffer",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "offchainID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "description",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "startupName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "sharedStake",
        type: "uint16",
      },
    ],
    name: "NewInvestmentProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalID",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "validatorEOA",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "offchainID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "description",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "validatorName",
        type: "string",
      },
    ],
    name: "NewValidatorProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "ProposalCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalID",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "offchainID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "description",
        type: "bytes32",
      },
    ],
    name: "UnfreezeInvestmentProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "enum IGovernorINN.VoteType",
        name: "vote",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "VoteCast",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "cancel",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
      {
        internalType: "enum IGovernorINN.VoteType",
        name: "vote",
        type: "uint8",
      },
    ],
    name: "castVote",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasVoted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "offchainID",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "descriptionHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "enum IGovernorINN.ProposalType",
        name: "proposalType",
        type: "uint8",
      },
      {
        internalType: "enum IGovernorINN.ActionType",
        name: "actionType",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "hashProposal",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "offchainID",
            type: "bytes32",
          },
          {
            internalType: "enum IGovernorINN.ProposalType",
            name: "proposalType",
            type: "uint8",
          },
          {
            internalType: "enum IGovernorINN.ActionType",
            name: "actionType",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IGovernorINN.ProposalRequest",
        name: "proposalRequest",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "propose",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
    ],
    name: "state",
    outputs: [
      {
        internalType: "enum IGovernorINN.ProposalState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
