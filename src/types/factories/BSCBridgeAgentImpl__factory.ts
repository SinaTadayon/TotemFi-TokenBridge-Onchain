/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { BSCBridgeAgentImpl } from "../BSCBridgeAgentImpl";

export class BSCBridgeAgentImpl__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BSCBridgeAgentImpl> {
    return super.deploy(overrides || {}) as Promise<BSCBridgeAgentImpl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BSCBridgeAgentImpl {
    return super.attach(address) as BSCBridgeAgentImpl;
  }
  connect(signer: Signer): BSCBridgeAgentImpl__factory {
    return super.connect(signer) as BSCBridgeAgentImpl__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BSCBridgeAgentImpl {
    return new Contract(address, _abi, signerOrProvider) as BSCBridgeAgentImpl;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "metisTxHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "swapType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "exchange",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "swapFilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "metisTxHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "swapType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "base",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "quote",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "exchange",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapStarted",
    type: "event",
  },
  {
    inputs: [],
    name: "bnbBalance",
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
    name: "bnbWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bscBridgeAgentImpl",
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
        components: [
          {
            internalType: "string",
            name: "swapType",
            type: "string",
          },
          {
            internalType: "string",
            name: "base",
            type: "string",
          },
          {
            internalType: "string",
            name: "quote",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "exchange",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        internalType: "struct IMessageStructure.Message",
        name: "message",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "metisTxHash",
        type: "bytes32",
      },
    ],
    name: "fillBNB2TOTMPegin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "pancakePair",
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
    name: "pancakeswapRouter",
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
        name: "_pancakePair",
        type: "address",
      },
    ],
    name: "setPancakePair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_slippagePercentage",
        type: "uint256",
      },
    ],
    name: "setSlippagePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "slippagePercentage",
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
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "swapRouterQuery",
    outputs: [
      {
        internalType: "uint256",
        name: "baseReserved",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quoteReserved",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exchange",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totemBalance",
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
    name: "totemToken",
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
  {
    inputs: [],
    name: "wbnb",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506114a3806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063a5b601be116100a2578063d013cbe211610071578063d013cbe214610240578063d4fde9c914610248578063db6754ed1461025b578063e2621d591461026e578063e8153c931461027657600080fd5b8063a5b601be146101ca578063a7d6dc1b146101dd578063b8c9d25c146101ff578063c37dcbd41461021257600080fd5b806375bbeee7116100de57806375bbeee71461017f5780638cf0e21e146101875780638d72647e146101a45780638da5cb5b146101b757600080fd5b806303baf066146101105780633e47158c146101255780634452d81c14610155578063635d9a471461016c575b600080fd5b61012361011e366004610dd5565b610289565b005b603454610138906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61015e603a5481565b60405190815260200161014c565b61012361017a366004610eeb565b6102ca565b6101236106c2565b603b546101949060ff1681565b604051901515815260200161014c565b603654610138906001600160a01b031681565b603554610138906001600160a01b031681565b6101236101d8366004610ff1565b610722565b6101f06101eb36600461100c565b610777565b60405161014c93929190611092565b603954610138906001600160a01b031681565b610225610220366004610dd5565b61082d565b6040805193845260208401929092529082015260600161014c565b61015e610962565b603354610138906001600160a01b031681565b603854610138906001600160a01b031681565b61015e6109d5565b603754610138906001600160a01b031681565b6035546001600160a01b0316336001600160a01b0316146102c55760405162461bcd60e51b81526004016102bc906110ba565b60405180910390fd5b603a55565b6035546001600160a01b0316336001600160a01b0316146102fd5760405162461bcd60e51b81526004016102bc906110ba565b816060015161030a610962565b101561034e5760405162461bcd60e51b81526020600482015260136024820152721a5b9cdd59999a58da595b9d08185b5bdd5b9d606a1b60448201526064016102bc565b428260e0015110156103985760405162461bcd60e51b8152602060048201526013602482015272191958591b1a5b99481a185cc81c185cdcd959606a1b60448201526064016102bc565b6101008201516001600160a01b03166000908152603c60209081526040808320848452909152902054156104035760405162461bcd60e51b8152602060048201526012602482015271185b1c9958591e481c9959da5cdd195c995960721b60448201526064016102bc565b808261010001516001600160a01b03167fddbc9ff29a9285afc6faa85774fd182b7d957a0096a14716b88d020717071b1c846000015185602001518660400151876060015188608001518960a001518a60c001518b60e001516040516104709897969594939291906110ff565b60405180910390a3603654603854606084015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915291169063095ea7b3906044016020604051808303816000875af11580156104d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f79190611167565b506000610507836060015161082d565b925050506000612710603a548361051e919061119f565b61052891906111be565b61053290836111e0565b9050600061053e6109d5565b60385460608701519192506001600160a01b0316906338ed17399084610562610a06565b308a60e001516040518663ffffffff1660e01b815260040161058895949392919061123b565b6000604051808303816000875af11580156105a7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105cf9190810190611277565b50806105d96109d5565b6105e391906111e0565b60a086019081526040805160608101825260c088015181529151602080840191825288518484019081526101008a01516001600160a01b03166000908152603c83528481208a82528352939093208451815591516001830155915180518493610653926002850192910190610d3c565b50905050848661010001516001600160a01b03167f061eaa4b2045ee0ba76d9754efebbb41b3b16198923b4c19afcc434b6136d3b0886000015189606001518a608001518b60a001518c60c001516040516106b295949392919061131d565b60405180910390a3505050505050565b6035546001600160a01b0316336001600160a01b0316146106f55760405162461bcd60e51b81526004016102bc906110ba565b603554610720906001600160a01b031661070d610962565b6036546001600160a01b03169190610a99565b565b6035546001600160a01b0316336001600160a01b0316146107555760405162461bcd60e51b81526004016102bc906110ba565b603980546001600160a01b0319166001600160a01b0392909216919091179055565b603c602090815260009283526040808420909152908252902080546001820154600283018054929391926107aa90611354565b80601f01602080910402602001604051908101604052809291908181526020018280546107d690611354565b80156108235780601f106107f857610100808354040283529160200191610823565b820191906000526020600020905b81548152906001019060200180831161080657829003601f168201915b5050505050905083565b6038546000908190819081906001600160a01b031663d06ca61f86610850610a06565b6040518363ffffffff1660e01b815260040161086d92919061138f565b600060405180830381865afa15801561088a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108b29190810190611277565b9050806001815181106108c7576108c76113a8565b60200260200101519150603960009054906101000a90046001600160a01b03166001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610924573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094891906113d5565b506001600160701b03908116979116955091935090915050565b6036546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a08231906024015b602060405180830381865afa1580156109ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d09190611425565b905090565b6037546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240161098f565b60408051600280825260608083018452926000929190602083019080368337505060365482519293506001600160a01b031691839150600090610a4b57610a4b6113a8565b6001600160a01b039283166020918202929092010152603754825191169082906001908110610a7c57610a7c6113a8565b6001600160a01b0390921660209283029190910190910152919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610aeb908490610af0565b505050565b6000610b45826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610bc29092919063ffffffff16565b805190915015610aeb5780806020019051810190610b639190611167565b610aeb5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102bc565b6060610bd18484600085610bdb565b90505b9392505050565b606082471015610c3c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102bc565b843b610c8a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102bc565b600080866001600160a01b03168587604051610ca6919061143e565b60006040518083038185875af1925050503d8060008114610ce3576040519150601f19603f3d011682016040523d82523d6000602084013e610ce8565b606091505b5091509150610cf8828286610d03565b979650505050505050565b60608315610d12575081610bd4565b825115610d225782518084602001fd5b8160405162461bcd60e51b81526004016102bc919061145a565b828054610d4890611354565b90600052602060002090601f016020900481019282610d6a5760008555610db0565b82601f10610d8357805160ff1916838001178555610db0565b82800160010185558215610db0579182015b82811115610db0578251825591602001919060010190610d95565b50610dbc929150610dc0565b5090565b5b80821115610dbc5760008155600101610dc1565b600060208284031215610de757600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715610e2857610e28610dee565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610e5757610e57610dee565b604052919050565b600082601f830112610e7057600080fd5b813567ffffffffffffffff811115610e8a57610e8a610dee565b610e9d601f8201601f1916602001610e2e565b818152846020838601011115610eb257600080fd5b816020850160208301376000918101602001919091529392505050565b80356001600160a01b0381168114610ee657600080fd5b919050565b60008060408385031215610efe57600080fd5b823567ffffffffffffffff80821115610f1657600080fd5b908401906101208287031215610f2b57600080fd5b610f33610e04565b823582811115610f4257600080fd5b610f4e88828601610e5f565b825250602083013582811115610f6357600080fd5b610f6f88828601610e5f565b602083015250604083013582811115610f8757600080fd5b610f9388828601610e5f565b604083015250606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101009150610fdb828401610ecf565b9181019190915295602094909401359450505050565b60006020828403121561100357600080fd5b610bd482610ecf565b6000806040838503121561101f57600080fd5b61102883610ecf565b946020939093013593505050565b60005b83811015611051578181015183820152602001611039565b83811115611060576000848401525b50505050565b6000815180845261107e816020860160208601611036565b601f01601f19169290920160200192915050565b8381528260208201526060604082015260006110b16060830184611066565b95945050505050565b60208082526025908201527f63616e206f6e6c792062652063616c6c6564206279207468652070726f78792060408201526430b236b4b760d91b606082015260800190565b60006101008083526111138184018c611066565b90508281036020840152611127818b611066565b9050828103604084015261113b818a611066565b60608401989098525050608081019490945260a084019290925260c083015260e0909101529392505050565b60006020828403121561117957600080fd5b81518015158114610bd457600080fd5b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156111b9576111b9611189565b500290565b6000826111db57634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156111f2576111f2611189565b500390565b600081518084526020808501945080840160005b838110156112305781516001600160a01b03168752958201959082019060010161120b565b509495945050505050565b85815284602082015260a06040820152600061125a60a08301866111f7565b6001600160a01b0394909416606083015250608001529392505050565b6000602080838503121561128a57600080fd5b825167ffffffffffffffff808211156112a257600080fd5b818501915085601f8301126112b657600080fd5b8151818111156112c8576112c8610dee565b8060051b91506112d9848301610e2e565b81815291830184019184810190888411156112f357600080fd5b938501935b83851015611311578451825293850193908501906112f8565b98975050505050505050565b60a08152600061133060a0830188611066565b90508560208301528460408301528360608301528260808301529695505050505050565b600181811c9082168061136857607f821691505b6020821081141561138957634e487b7160e01b600052602260045260246000fd5b50919050565b828152604060208201526000610bd160408301846111f7565b634e487b7160e01b600052603260045260246000fd5b80516001600160701b0381168114610ee657600080fd5b6000806000606084860312156113ea57600080fd5b6113f3846113be565b9250611401602085016113be565b9150604084015163ffffffff8116811461141a57600080fd5b809150509250925092565b60006020828403121561143757600080fd5b5051919050565b60008251611450818460208701611036565b9190910192915050565b602081526000610bd4602083018461106656fea2646970667358221220664b0618a5562a559f01d4a000a200afbfa899a8e069a3710037143eb143dbae64736f6c634300080b0033";