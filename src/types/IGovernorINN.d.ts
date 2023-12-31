/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IGovernorINNInterface extends ethers.utils.Interface {
  functions: {
    "cancel(bytes32,string)": FunctionFragment;
    "castVote(string,bytes32,uint8)": FunctionFragment;
    "execute(bytes32)": FunctionFragment;
    "hasVoted(bytes32,address)": FunctionFragment;
    "hashProposal(bytes32,bytes32,address,uint8,uint8,bytes)": FunctionFragment;
    "name()": FunctionFragment;
    "propose(tuple,bytes)": FunctionFragment;
    "state(bytes32)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancel",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "execute", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "hasVoted",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hashProposal",
    values: [
      BytesLike,
      BytesLike,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [
      {
        offchainID: BytesLike;
        proposalType: BigNumberish;
        actionType: BigNumberish;
        description: string;
        data: BytesLike;
      },
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "state", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasVoted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "ExitInvestmentProposalCreated(bytes32,address,address,uint256,bytes32,bytes32,string,uint16)": EventFragment;
    "FreezeInvestmentProposalCreated(bytes32,address,address,bytes32,bytes32)": EventFragment;
    "NewInvestmentProposalCreated(bytes32,address,address,uint256,bytes32,bytes32,string,uint16)": EventFragment;
    "NewValidatorProposalCreated(bytes32,address,address,bytes32,bytes32,string)": EventFragment;
    "ProposalCanceled(bytes32,string)": EventFragment;
    "ProposalExecuted(bytes32)": EventFragment;
    "UnfreezeInvestmentProposalCreated(bytes32,address,address,bytes32,bytes32)": EventFragment;
    "VoteCast(address,bytes32,uint8,string)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "ExitInvestmentProposalCreated"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "FreezeInvestmentProposalCreated"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewInvestmentProposalCreated"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewValidatorProposalCreated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "UnfreezeInvestmentProposalCreated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
}

export class IGovernorINN extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IGovernorINNInterface;

  functions: {
    cancel(
      proposalId: BytesLike,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "cancel(bytes32,string)"(
      proposalId: BytesLike,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    castVote(
      reason: string,
      proposalId: BytesLike,
      vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "castVote(string,bytes32,uint8)"(
      reason: string,
      proposalId: BytesLike,
      vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execute(
      proposalId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "execute(bytes32)"(
      proposalId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasVoted(
      proposalId: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "hasVoted(bytes32,address)"(
      proposalId: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    hashProposal(
      offchainID: BytesLike,
      descriptionHash: BytesLike,
      proposer: string,
      proposalType: BigNumberish,
      actionType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "hashProposal(bytes32,bytes32,address,uint8,uint8,bytes)"(
      offchainID: BytesLike,
      descriptionHash: BytesLike,
      proposer: string,
      proposalType: BigNumberish,
      actionType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    propose(
      proposalRequest: {
        offchainID: BytesLike;
        proposalType: BigNumberish;
        actionType: BigNumberish;
        description: string;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "propose((bytes32,uint8,uint8,string,bytes),bytes)"(
      proposalRequest: {
        offchainID: BytesLike;
        proposalType: BigNumberish;
        actionType: BigNumberish;
        description: string;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    state(proposalId: BytesLike, overrides?: CallOverrides): Promise<[number]>;

    "state(bytes32)"(
      proposalId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    version(overrides?: CallOverrides): Promise<[string]>;

    "version()"(overrides?: CallOverrides): Promise<[string]>;
  };

  cancel(
    proposalId: BytesLike,
    reason: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "cancel(bytes32,string)"(
    proposalId: BytesLike,
    reason: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  castVote(
    reason: string,
    proposalId: BytesLike,
    vote: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "castVote(string,bytes32,uint8)"(
    reason: string,
    proposalId: BytesLike,
    vote: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execute(
    proposalId: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "execute(bytes32)"(
    proposalId: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasVoted(
    proposalId: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasVoted(bytes32,address)"(
    proposalId: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hashProposal(
    offchainID: BytesLike,
    descriptionHash: BytesLike,
    proposer: string,
    proposalType: BigNumberish,
    actionType: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "hashProposal(bytes32,bytes32,address,uint8,uint8,bytes)"(
    offchainID: BytesLike,
    descriptionHash: BytesLike,
    proposer: string,
    proposalType: BigNumberish,
    actionType: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  propose(
    proposalRequest: {
      offchainID: BytesLike;
      proposalType: BigNumberish;
      actionType: BigNumberish;
      description: string;
      data: BytesLike;
    },
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "propose((bytes32,uint8,uint8,string,bytes),bytes)"(
    proposalRequest: {
      offchainID: BytesLike;
      proposalType: BigNumberish;
      actionType: BigNumberish;
      description: string;
      data: BytesLike;
    },
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  state(proposalId: BytesLike, overrides?: CallOverrides): Promise<number>;

  "state(bytes32)"(
    proposalId: BytesLike,
    overrides?: CallOverrides
  ): Promise<number>;

  version(overrides?: CallOverrides): Promise<string>;

  "version()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cancel(
      proposalId: BytesLike,
      reason: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "cancel(bytes32,string)"(
      proposalId: BytesLike,
      reason: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    castVote(
      reason: string,
      proposalId: BytesLike,
      vote: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "castVote(string,bytes32,uint8)"(
      reason: string,
      proposalId: BytesLike,
      vote: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    execute(proposalId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "execute(bytes32)"(
      proposalId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hasVoted(
      proposalId: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasVoted(bytes32,address)"(
      proposalId: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hashProposal(
      offchainID: BytesLike,
      descriptionHash: BytesLike,
      proposer: string,
      proposalType: BigNumberish,
      actionType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "hashProposal(bytes32,bytes32,address,uint8,uint8,bytes)"(
      offchainID: BytesLike,
      descriptionHash: BytesLike,
      proposer: string,
      proposalType: BigNumberish,
      actionType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    propose(
      proposalRequest: {
        offchainID: BytesLike;
        proposalType: BigNumberish;
        actionType: BigNumberish;
        description: string;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "propose((bytes32,uint8,uint8,string,bytes),bytes)"(
      proposalRequest: {
        offchainID: BytesLike;
        proposalType: BigNumberish;
        actionType: BigNumberish;
        description: string;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    state(proposalId: BytesLike, overrides?: CallOverrides): Promise<number>;

    "state(bytes32)"(
      proposalId: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    version(overrides?: CallOverrides): Promise<string>;

    "version()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ExitInvestmentProposalCreated(
      proposalId: BytesLike | null,
      proposer: string | null,
      validatorEOA: string | null,
      tokenOffer: null,
      offchainID: null,
      description: null,
      startupName: null,
      sharedStake: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, string, string, string, number],
      {
        proposalId: string;
        proposer: string;
        validatorEOA: string;
        tokenOffer: BigNumber;
        offchainID: string;
        description: string;
        startupName: string;
        sharedStake: number;
      }
    >;

    FreezeInvestmentProposalCreated(
      proposalId: BytesLike | null,
      proposer: string | null,
      account: string | null,
      offchainID: null,
      description: null
    ): TypedEventFilter<
      [string, string, string, string, string],
      {
        proposalId: string;
        proposer: string;
        account: string;
        offchainID: string;
        description: string;
      }
    >;

    NewInvestmentProposalCreated(
      proposalID: BytesLike | null,
      proposer: string | null,
      startupEOA: string | null,
      tokenOffer: null,
      offchainID: null,
      description: null,
      startupName: null,
      sharedStake: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, string, string, string, number],
      {
        proposalID: string;
        proposer: string;
        startupEOA: string;
        tokenOffer: BigNumber;
        offchainID: string;
        description: string;
        startupName: string;
        sharedStake: number;
      }
    >;

    NewValidatorProposalCreated(
      proposalID: BytesLike | null,
      proposer: string | null,
      validatorEOA: string | null,
      offchainID: null,
      description: null,
      validatorName: null
    ): TypedEventFilter<
      [string, string, string, string, string, string],
      {
        proposalID: string;
        proposer: string;
        validatorEOA: string;
        offchainID: string;
        description: string;
        validatorName: string;
      }
    >;

    ProposalCanceled(
      proposalId: BytesLike | null,
      reason: null
    ): TypedEventFilter<
      [string, string],
      { proposalId: string; reason: string }
    >;

    ProposalExecuted(
      proposalId: BytesLike | null
    ): TypedEventFilter<[string], { proposalId: string }>;

    UnfreezeInvestmentProposalCreated(
      proposalID: BytesLike | null,
      proposer: string | null,
      account: string | null,
      offchainID: null,
      description: null
    ): TypedEventFilter<
      [string, string, string, string, string],
      {
        proposalID: string;
        proposer: string;
        account: string;
        offchainID: string;
        description: string;
      }
    >;

    VoteCast(
      voter: string | null,
      proposalId: BytesLike | null,
      vote: null,
      reason: null
    ): TypedEventFilter<
      [string, string, number, string],
      { voter: string; proposalId: string; vote: number; reason: string }
    >;
  };

  estimateGas: {
    cancel(
      proposalId: BytesLike,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "cancel(bytes32,string)"(
      proposalId: BytesLike,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    castVote(
      reason: string,
      proposalId: BytesLike,
      vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "castVote(string,bytes32,uint8)"(
      reason: string,
      proposalId: BytesLike,
      vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execute(
      proposalId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "execute(bytes32)"(
      proposalId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasVoted(
      proposalId: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasVoted(bytes32,address)"(
      proposalId: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashProposal(
      offchainID: BytesLike,
      descriptionHash: BytesLike,
      proposer: string,
      proposalType: BigNumberish,
      actionType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hashProposal(bytes32,bytes32,address,uint8,uint8,bytes)"(
      offchainID: BytesLike,
      descriptionHash: BytesLike,
      proposer: string,
      proposalType: BigNumberish,
      actionType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    propose(
      proposalRequest: {
        offchainID: BytesLike;
        proposalType: BigNumberish;
        actionType: BigNumberish;
        description: string;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "propose((bytes32,uint8,uint8,string,bytes),bytes)"(
      proposalRequest: {
        offchainID: BytesLike;
        proposalType: BigNumberish;
        actionType: BigNumberish;
        description: string;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    state(proposalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "state(bytes32)"(
      proposalId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cancel(
      proposalId: BytesLike,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "cancel(bytes32,string)"(
      proposalId: BytesLike,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    castVote(
      reason: string,
      proposalId: BytesLike,
      vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "castVote(string,bytes32,uint8)"(
      reason: string,
      proposalId: BytesLike,
      vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      proposalId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "execute(bytes32)"(
      proposalId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasVoted(
      proposalId: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasVoted(bytes32,address)"(
      proposalId: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashProposal(
      offchainID: BytesLike,
      descriptionHash: BytesLike,
      proposer: string,
      proposalType: BigNumberish,
      actionType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hashProposal(bytes32,bytes32,address,uint8,uint8,bytes)"(
      offchainID: BytesLike,
      descriptionHash: BytesLike,
      proposer: string,
      proposalType: BigNumberish,
      actionType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    propose(
      proposalRequest: {
        offchainID: BytesLike;
        proposalType: BigNumberish;
        actionType: BigNumberish;
        description: string;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "propose((bytes32,uint8,uint8,string,bytes),bytes)"(
      proposalRequest: {
        offchainID: BytesLike;
        proposalType: BigNumberish;
        actionType: BigNumberish;
        description: string;
        data: BytesLike;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    state(
      proposalId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "state(bytes32)"(
      proposalId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "version()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
