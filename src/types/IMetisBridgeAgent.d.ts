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

interface IMetisBridgeAgentInterface extends ethers.utils.Interface {
  functions: {
    "claimMTS2TOTMPegIn(bytes32)": FunctionFragment;
    "fillMTS2TOTMPegIn(address,bytes32,bytes32,string,uint256,uint256)": FunctionFragment;
    "mtsBalance()": FunctionFragment;
    "mtsWithdraw()": FunctionFragment;
    "pegInMTS2TOTM(tuple,bytes)": FunctionFragment;
    "setClaim(address,bytes32,bool)": FunctionFragment;
    "setFill(address,bytes32,bool)": FunctionFragment;
    "setNonce(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimMTS2TOTMPegIn",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fillMTS2TOTMPegIn",
    values: [string, BytesLike, BytesLike, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mtsBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mtsWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pegInMTS2TOTM",
    values: [
      {
        swapType: string;
        base: string;
        quote: string;
        amount: BigNumberish;
        fee: BigNumberish;
        exchange: BigNumberish;
        nonce: BigNumberish;
        deadline: BigNumberish;
        account: string;
      },
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaim",
    values: [string, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setFill",
    values: [string, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setNonce",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimMTS2TOTMPegIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fillMTS2TOTMPegIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mtsBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mtsWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pegInMTS2TOTM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setClaim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setNonce", data: BytesLike): Result;

  events: {
    "swapClaimed(address,bytes32,string,uint256)": EventFragment;
    "swapFilled(address,bytes32,bytes32,string,uint256,uint256)": EventFragment;
    "swapStarted(address,bytes32,string,string,string,uint256,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "swapClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "swapFilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "swapStarted"): EventFragment;
}

export class IMetisBridgeAgent extends Contract {
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

  interface: IMetisBridgeAgentInterface;

  functions: {
    claimMTS2TOTMPegIn(
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claimMTS2TOTMPegIn(bytes32)"(
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fillMTS2TOTMPegIn(
      recipient: string,
      dataHash: BytesLike,
      bscTxHash: BytesLike,
      swapType: string,
      fee: BigNumberish,
      exchange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "fillMTS2TOTMPegIn(address,bytes32,bytes32,string,uint256,uint256)"(
      recipient: string,
      dataHash: BytesLike,
      bscTxHash: BytesLike,
      swapType: string,
      fee: BigNumberish,
      exchange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mtsBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "mtsBalance()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mtsWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "mtsWithdraw()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pegInMTS2TOTM(
      message: {
        swapType: string;
        base: string;
        quote: string;
        amount: BigNumberish;
        fee: BigNumberish;
        exchange: BigNumberish;
        nonce: BigNumberish;
        deadline: BigNumberish;
        account: string;
      },
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "pegInMTS2TOTM((string,string,string,uint256,uint256,uint256,uint256,uint256,address),bytes)"(
      message: {
        swapType: string;
        base: string;
        quote: string;
        amount: BigNumberish;
        fee: BigNumberish;
        exchange: BigNumberish;
        nonce: BigNumberish;
        deadline: BigNumberish;
        account: string;
      },
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClaim(
      account: string,
      dataHash: BytesLike,
      claimStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setClaim(address,bytes32,bool)"(
      account: string,
      dataHash: BytesLike,
      claimStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFill(
      account: string,
      dataHash: BytesLike,
      fillStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFill(address,bytes32,bool)"(
      account: string,
      dataHash: BytesLike,
      fillStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setNonce(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setNonce(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claimMTS2TOTMPegIn(
    dataHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claimMTS2TOTMPegIn(bytes32)"(
    dataHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fillMTS2TOTMPegIn(
    recipient: string,
    dataHash: BytesLike,
    bscTxHash: BytesLike,
    swapType: string,
    fee: BigNumberish,
    exchange: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "fillMTS2TOTMPegIn(address,bytes32,bytes32,string,uint256,uint256)"(
    recipient: string,
    dataHash: BytesLike,
    bscTxHash: BytesLike,
    swapType: string,
    fee: BigNumberish,
    exchange: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mtsBalance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "mtsBalance()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mtsWithdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "mtsWithdraw()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pegInMTS2TOTM(
    message: {
      swapType: string;
      base: string;
      quote: string;
      amount: BigNumberish;
      fee: BigNumberish;
      exchange: BigNumberish;
      nonce: BigNumberish;
      deadline: BigNumberish;
      account: string;
    },
    signature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "pegInMTS2TOTM((string,string,string,uint256,uint256,uint256,uint256,uint256,address),bytes)"(
    message: {
      swapType: string;
      base: string;
      quote: string;
      amount: BigNumberish;
      fee: BigNumberish;
      exchange: BigNumberish;
      nonce: BigNumberish;
      deadline: BigNumberish;
      account: string;
    },
    signature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClaim(
    account: string,
    dataHash: BytesLike,
    claimStat: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setClaim(address,bytes32,bool)"(
    account: string,
    dataHash: BytesLike,
    claimStat: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFill(
    account: string,
    dataHash: BytesLike,
    fillStat: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFill(address,bytes32,bool)"(
    account: string,
    dataHash: BytesLike,
    fillStat: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setNonce(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setNonce(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimMTS2TOTMPegIn(
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "claimMTS2TOTMPegIn(bytes32)"(
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    fillMTS2TOTMPegIn(
      recipient: string,
      dataHash: BytesLike,
      bscTxHash: BytesLike,
      swapType: string,
      fee: BigNumberish,
      exchange: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "fillMTS2TOTMPegIn(address,bytes32,bytes32,string,uint256,uint256)"(
      recipient: string,
      dataHash: BytesLike,
      bscTxHash: BytesLike,
      swapType: string,
      fee: BigNumberish,
      exchange: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mtsBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "mtsBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    mtsWithdraw(overrides?: CallOverrides): Promise<void>;

    "mtsWithdraw()"(overrides?: CallOverrides): Promise<void>;

    pegInMTS2TOTM(
      message: {
        swapType: string;
        base: string;
        quote: string;
        amount: BigNumberish;
        fee: BigNumberish;
        exchange: BigNumberish;
        nonce: BigNumberish;
        deadline: BigNumberish;
        account: string;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "pegInMTS2TOTM((string,string,string,uint256,uint256,uint256,uint256,uint256,address),bytes)"(
      message: {
        swapType: string;
        base: string;
        quote: string;
        amount: BigNumberish;
        fee: BigNumberish;
        exchange: BigNumberish;
        nonce: BigNumberish;
        deadline: BigNumberish;
        account: string;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setClaim(
      account: string,
      dataHash: BytesLike,
      claimStat: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setClaim(address,bytes32,bool)"(
      account: string,
      dataHash: BytesLike,
      claimStat: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setFill(
      account: string,
      dataHash: BytesLike,
      fillStat: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFill(address,bytes32,bool)"(
      account: string,
      dataHash: BytesLike,
      fillStat: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setNonce(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setNonce(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    swapClaimed(
      recipient: string | null,
      dataHash: BytesLike | null,
      swapType: null,
      exchange: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      {
        recipient: string;
        dataHash: string;
        swapType: string;
        exchange: BigNumber;
      }
    >;

    swapFilled(
      recipient: string | null,
      bscTxHash: BytesLike | null,
      dataHash: BytesLike | null,
      swapType: null,
      fee: null,
      exchange: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber, BigNumber],
      {
        recipient: string;
        bscTxHash: string;
        dataHash: string;
        swapType: string;
        fee: BigNumber;
        exchange: BigNumber;
      }
    >;

    swapStarted(
      spender: string | null,
      dataHash: BytesLike | null,
      swapType: null,
      base: null,
      quote: null,
      amount: null,
      fee: null,
      exchange: null,
      nonce: null,
      deadline: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
        spender: string;
        dataHash: string;
        swapType: string;
        base: string;
        quote: string;
        amount: BigNumber;
        fee: BigNumber;
        exchange: BigNumber;
        nonce: BigNumber;
        deadline: BigNumber;
      }
    >;
  };

  estimateGas: {
    claimMTS2TOTMPegIn(
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claimMTS2TOTMPegIn(bytes32)"(
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fillMTS2TOTMPegIn(
      recipient: string,
      dataHash: BytesLike,
      bscTxHash: BytesLike,
      swapType: string,
      fee: BigNumberish,
      exchange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "fillMTS2TOTMPegIn(address,bytes32,bytes32,string,uint256,uint256)"(
      recipient: string,
      dataHash: BytesLike,
      bscTxHash: BytesLike,
      swapType: string,
      fee: BigNumberish,
      exchange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mtsBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "mtsBalance()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mtsWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "mtsWithdraw()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pegInMTS2TOTM(
      message: {
        swapType: string;
        base: string;
        quote: string;
        amount: BigNumberish;
        fee: BigNumberish;
        exchange: BigNumberish;
        nonce: BigNumberish;
        deadline: BigNumberish;
        account: string;
      },
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "pegInMTS2TOTM((string,string,string,uint256,uint256,uint256,uint256,uint256,address),bytes)"(
      message: {
        swapType: string;
        base: string;
        quote: string;
        amount: BigNumberish;
        fee: BigNumberish;
        exchange: BigNumberish;
        nonce: BigNumberish;
        deadline: BigNumberish;
        account: string;
      },
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClaim(
      account: string,
      dataHash: BytesLike,
      claimStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setClaim(address,bytes32,bool)"(
      account: string,
      dataHash: BytesLike,
      claimStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFill(
      account: string,
      dataHash: BytesLike,
      fillStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFill(address,bytes32,bool)"(
      account: string,
      dataHash: BytesLike,
      fillStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setNonce(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setNonce(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimMTS2TOTMPegIn(
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claimMTS2TOTMPegIn(bytes32)"(
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fillMTS2TOTMPegIn(
      recipient: string,
      dataHash: BytesLike,
      bscTxHash: BytesLike,
      swapType: string,
      fee: BigNumberish,
      exchange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "fillMTS2TOTMPegIn(address,bytes32,bytes32,string,uint256,uint256)"(
      recipient: string,
      dataHash: BytesLike,
      bscTxHash: BytesLike,
      swapType: string,
      fee: BigNumberish,
      exchange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mtsBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "mtsBalance()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mtsWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "mtsWithdraw()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pegInMTS2TOTM(
      message: {
        swapType: string;
        base: string;
        quote: string;
        amount: BigNumberish;
        fee: BigNumberish;
        exchange: BigNumberish;
        nonce: BigNumberish;
        deadline: BigNumberish;
        account: string;
      },
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "pegInMTS2TOTM((string,string,string,uint256,uint256,uint256,uint256,uint256,address),bytes)"(
      message: {
        swapType: string;
        base: string;
        quote: string;
        amount: BigNumberish;
        fee: BigNumberish;
        exchange: BigNumberish;
        nonce: BigNumberish;
        deadline: BigNumberish;
        account: string;
      },
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClaim(
      account: string,
      dataHash: BytesLike,
      claimStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setClaim(address,bytes32,bool)"(
      account: string,
      dataHash: BytesLike,
      claimStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFill(
      account: string,
      dataHash: BytesLike,
      fillStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFill(address,bytes32,bool)"(
      account: string,
      dataHash: BytesLike,
      fillStat: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setNonce(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setNonce(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
