/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MetisBridgeAgentStorageStructure } from "../MetisBridgeAgentStorageStructure";

export class MetisBridgeAgentStorageStructure__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MetisBridgeAgentStorageStructure> {
    return super.deploy(
      overrides || {}
    ) as Promise<MetisBridgeAgentStorageStructure>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MetisBridgeAgentStorageStructure {
    return super.attach(address) as MetisBridgeAgentStorageStructure;
  }
  connect(signer: Signer): MetisBridgeAgentStorageStructure__factory {
    return super.connect(signer) as MetisBridgeAgentStorageStructure__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MetisBridgeAgentStorageStructure {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MetisBridgeAgentStorageStructure;
  }
}

const _abi = [
  {
    inputs: [],
    name: "domain",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "metisBridgeAgentImpl",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "peggedTotemTokenProxy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "swapDataMap",
    outputs: [
      {
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exchange",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "swapType",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isFilled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isClaimed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "swapNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradeEnabled",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061053e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639afad3ed1161005b5780639afad3ed14610122578063a6936d5c14610135578063a7d6dc1b14610148578063c2fb26a61461016d57600080fd5b80633e47158c1461008d5780636dbf4547146100bd5780638cf0e21e146100eb5780638da5cb5b1461010f575b600080fd5b6034546100a0906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100dd6100cb3660046103ae565b603b6020526000908152604090205481565b6040519081526020016100b4565b6036546100ff90600160a01b900460ff1681565b60405190151581526020016100b4565b6036546100a0906001600160a01b031681565b6033546100a0906001600160a01b031681565b6035546100a0906001600160a01b031681565b61015b6101563660046103d0565b610185565b6040516100b496959493929190610447565b61017561025c565b6040516100b49493929190610486565b603c602052816000526040600020602052806000526040600020600091509150508060000154908060010154908060020154908060030180546101c7906104cd565b80601f01602080910402602001604051908101604052809291908181526020018280546101f3906104cd565b80156102405780601f1061021557610100808354040283529160200191610240565b820191906000526020600020905b81548152906001019060200180831161022357829003601f168201915b5050506004909301549192505060ff8082169161010090041686565b60378054819061026b906104cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610297906104cd565b80156102e45780601f106102b9576101008083540402835291602001916102e4565b820191906000526020600020905b8154815290600101906020018083116102c757829003601f168201915b5050505050908060010180546102f9906104cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610325906104cd565b80156103725780601f1061034757610100808354040283529160200191610372565b820191906000526020600020905b81548152906001019060200180831161035557829003601f168201915b5050505060028301546003909301549192916001600160a01b0316905084565b80356001600160a01b03811681146103a957600080fd5b919050565b6000602082840312156103c057600080fd5b6103c982610392565b9392505050565b600080604083850312156103e357600080fd5b6103ec83610392565b946020939093013593505050565b6000815180845260005b8181101561042057602081850181015186830182015201610404565b81811115610432576000602083870101525b50601f01601f19169290920160200192915050565b86815285602082015284604082015260c06060820152600061046c60c08301866103fa565b93151560808301525090151560a090910152949350505050565b60808152600061049960808301876103fa565b82810360208401526104ab81876103fa565b604084019590955250506001600160a01b039190911660609091015292915050565b600181811c908216806104e157607f821691505b6020821081141561050257634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212205e95a7c21e331cb00480387ca7fc64604a043a817d41aada1bebb9f54c0ce17e64736f6c634300080b0033";
