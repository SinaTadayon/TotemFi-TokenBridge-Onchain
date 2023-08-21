/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { PeggedTotemTokenProxy } from "../PeggedTotemTokenProxy";

export class PeggedTotemTokenProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _proxyAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PeggedTotemTokenProxy> {
    return super.deploy(
      _proxyAdmin,
      overrides || {}
    ) as Promise<PeggedTotemTokenProxy>;
  }
  getDeployTransaction(
    _proxyAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_proxyAdmin, overrides || {});
  }
  attach(address: string): PeggedTotemTokenProxy {
    return super.attach(address) as PeggedTotemTokenProxy;
  }
  connect(signer: Signer): PeggedTotemTokenProxy__factory {
    return super.connect(signer) as PeggedTotemTokenProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PeggedTotemTokenProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PeggedTotemTokenProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_proxyAdmin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldImpl",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newImpl",
        type: "address",
      },
    ],
    name: "ImplementationUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "locker",
        type: "address",
      },
    ],
    name: "SetLocker",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SWAPPER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [],
    name: "disableUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "enableUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_taxationWallet",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "locker",
    outputs: [
      {
        internalType: "contract ILocker",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "peggedTotemTokenImpl",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "taxExempt",
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
    name: "taxRate",
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
    name: "taxationWallet",
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
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
    inputs: [
      {
        internalType: "address",
        name: "_newPeggedTotemTokenImpl",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405261012c60c95534801561001657600080fd5b50604051611b13380380611b1383398101604081905261003591610071565b60ca805460ff1916600117905560cc80546001600160a01b03929092166001600160a01b031992831617905560cd8054909116331790556100a1565b60006020828403121561008357600080fd5b81516001600160a01b038116811461009a57600080fd5b9392505050565b611a63806100b06000396000f3fe6080604052600436106101e75760003560e01c806367fc913811610102578063a217fddf11610095578063d547741f11610064578063d547741f146105d5578063d7b96d4e146105f5578063dd62ed3e14610615578063df668eca1461065b576101ee565b8063a217fddf14610550578063a457c2d714610565578063a9059cbb14610585578063d1ecfc68146105a5576101ee565b80638cf0e21e116100d15780638cf0e21e146104e15780638da5cb5b146104fb57806391d148541461051b57806395d89b411461053b576101ee565b806367fc91381461045e57806370a082311461047357806375b238fc146104a9578063771a3a1d146104cb576101ee565b80632f2ff15d1161017a5780633659cfe6116101495780633659cfe6146103d957806339509351146103f95780633e47158c146104195780634a5db0a914610439576101ee565b80632f2ff15d14610345578063313ce567146103655780633574ea8f1461038157806336568abe146103b9576101ee565b806318160ddd116101b657806318160ddd146102c157806323b872dd146102e0578063248a9ca31461030057806328016f9a14610330576101ee565b806301ffc9a71461022857806306fdde031461025d578063077f224a1461027f578063095ea7b3146102a1576101ee565b366101ee57005b60cb546001600160a01b03168061020457600080fd5b3660008037600080366000845af43d6000803e808015610223573d6000f35b3d6000fd5b34801561023457600080fd5b506102486102433660046115a4565b61068f565b60405190151581526020015b60405180910390f35b34801561026957600080fd5b506102726106c6565b60405161025491906115fa565b34801561028b57600080fd5b5061029f61029a3660046116ec565b610758565b005b3480156102ad57600080fd5b506102486102bc366004611760565b6108c7565b3480156102cd57600080fd5b506035545b604051908152602001610254565b3480156102ec57600080fd5b506102486102fb36600461178a565b6108dd565b34801561030c57600080fd5b506102d261031b3660046117c6565b60009081526097602052604090206001015490565b34801561033c57600080fd5b5061029f610987565b34801561035157600080fd5b5061029f6103603660046117df565b6109c9565b34801561037157600080fd5b5060405160128152602001610254565b34801561038d57600080fd5b5060cb546103a1906001600160a01b031681565b6040516001600160a01b039091168152602001610254565b3480156103c557600080fd5b5061029f6103d43660046117df565b6109f4565b3480156103e557600080fd5b5061029f6103f436600461180b565b610a72565b34801561040557600080fd5b50610248610414366004611760565b610b6b565b34801561042557600080fd5b5060cc546103a1906001600160a01b031681565b34801561044557600080fd5b5060ca546103a19061010090046001600160a01b031681565b34801561046a57600080fd5b5061029f610ba7565b34801561047f57600080fd5b506102d261048e36600461180b565b6001600160a01b031660009081526033602052604090205490565b3480156104b557600080fd5b506102d2600080516020611a0e83398151915281565b3480156104d757600080fd5b506102d260c95481565b3480156104ed57600080fd5b5060ca546102489060ff1681565b34801561050757600080fd5b5060cd546103a1906001600160a01b031681565b34801561052757600080fd5b506102486105363660046117df565b610be6565b34801561054757600080fd5b50610272610c11565b34801561055c57600080fd5b506102d2600081565b34801561057157600080fd5b50610248610580366004611760565b610c20565b34801561059157600080fd5b506102486105a0366004611760565b610cb9565b3480156105b157600080fd5b506102486105c036600461180b565b60cf6020526000908152604090205460ff1681565b3480156105e157600080fd5b5061029f6105f03660046117df565b610cc6565b34801561060157600080fd5b5060ce546103a1906001600160a01b031681565b34801561062157600080fd5b506102d2610630366004611826565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b34801561066757600080fd5b506102d27f724f6a44d576143e18c60911798b2b15551ca96bd8f7cb7524b8fa36253a26d881565b60006001600160e01b03198216637965db0b60e01b14806106c057506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060603680546106d590611850565b80601f016020809104026020016040519081016040528092919081815260200182805461070190611850565b801561074e5780601f106107235761010080835404028352916020019161074e565b820191906000526020600020905b81548152906001019060200180831161073157829003601f168201915b5050505050905090565b600054610100900460ff1680610771575060005460ff16155b6107965760405162461bcd60e51b815260040161078d9061188b565b60405180910390fd5b600054610100900460ff161580156107b8576000805461ffff19166101011790555b60cd546001600160a01b0316336001600160a01b0316146107eb5760405162461bcd60e51b815260040161078d906118d9565b6107f58484610cec565b6107fd610d81565b610815600080516020611a0e83398151915233610e05565b61083f7f724f6a44d576143e18c60911798b2b15551ca96bd8f7cb7524b8fa36253a26d833610e05565b610857600080516020611a0e83398151915280610e0f565b61088f7f724f6a44d576143e18c60911798b2b15551ca96bd8f7cb7524b8fa36253a26d8600080516020611a0e833981519152610e0f565b60ca8054610100600160a81b0319166101006001600160a01b0385160217905580156108c1576000805461ff00191690555b50505050565b60006108d4338484610e5a565b50600192915050565b60006108ea848484610f7e565b6001600160a01b03841660009081526034602090815260408083203384529091529020548281101561096f5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b606482015260840161078d565b61097c8533858403610e5a565b506001949350505050565b60cc546001600160a01b0316336001600160a01b0316146109ba5760405162461bcd60e51b815260040161078d906118d9565b60ca805460ff19166001179055565b6000828152609760205260409020600101546109e5813361114c565b6109ef83836111b0565b505050565b6001600160a01b0381163314610a645760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161078d565b610a6e8282611236565b5050565b60cd546001600160a01b0316336001600160a01b031614610aa55760405162461bcd60e51b815260040161078d906118d9565b60ca5460ff16610af75760405162461bcd60e51b815260206004820152601a60248201527f55706772616465206973206e6f7420656e61626c656420796574000000000000604482015260640161078d565b60cb546001600160a01b0382811691161415610b555760405162461bcd60e51b815260206004820152601d60248201527f497320616c72656164792074686520696d706c656d656e746174696f6e000000604482015260640161078d565b610b5e8161129d565b5060ca805460ff19169055565b3360008181526034602090815260408083206001600160a01b038716845290915281205490916108d4918590610ba2908690611934565b610e5a565b60cc546001600160a01b0316336001600160a01b031614610bda5760405162461bcd60e51b815260040161078d906118d9565b60ca805460ff19169055565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060603780546106d590611850565b3360009081526034602090815260408083206001600160a01b038616845290915281205482811015610ca25760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161078d565b610caf3385858403610e5a565b5060019392505050565b60006108d4338484610f7e565b600082815260976020526040902060010154610ce2813361114c565b6109ef8383611236565b600054610100900460ff1680610d05575060005460ff16155b610d215760405162461bcd60e51b815260040161078d9061188b565b600054610100900460ff16158015610d43576000805461ffff19166101011790555b8251610d5690603690602086019061150b565b508151610d6a90603790602085019061150b565b5080156109ef576000805461ff0019169055505050565b600054610100900460ff1680610d9a575060005460ff16155b610db65760405162461bcd60e51b815260040161078d9061188b565b600054610100900460ff16158015610dd8576000805461ffff19166101011790555b610de06112fe565b610de86112fe565b610df06112fe565b8015610e02576000805461ff00191690555b50565b610a6e82826111b0565b600082815260976020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6001600160a01b038316610ebc5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161078d565b6001600160a01b038216610f1d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161078d565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610fe25760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161078d565b6001600160a01b0382166110445760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161078d565b6001600160a01b038316600090815260336020526040902054818110156110bc5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161078d565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906110f3908490611934565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161113f91815260200190565b60405180910390a36108c1565b6111568282610be6565b610a6e5761116e816001600160a01b03166014611368565b611179836020611368565b60405160200161118a92919061194c565b60408051601f198184030181529082905262461bcd60e51b825261078d916004016115fa565b6111ba8282610be6565b610a6e5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff191660011790556111f23390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6112408282610be6565b15610a6e5760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60cb80546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f1a5ca99a64512489fd9455e8da426740174107a69292fca0a8b80b08f6f67892910160405180910390a15050565b600054610100900460ff1680611317575060005460ff16155b6113335760405162461bcd60e51b815260040161078d9061188b565b600054610100900460ff16158015610df0576000805461ffff19166101011790558015610e02576000805461ff001916905550565b606060006113778360026119c1565b611382906002611934565b67ffffffffffffffff81111561139a5761139a61162d565b6040519080825280601f01601f1916602001820160405280156113c4576020820181803683370190505b509050600360fc1b816000815181106113df576113df6119e0565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061140e5761140e6119e0565b60200101906001600160f81b031916908160001a90535060006114328460026119c1565b61143d906001611934565b90505b60018111156114b5576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611471576114716119e0565b1a60f81b828281518110611487576114876119e0565b60200101906001600160f81b031916908160001a90535060049490941c936114ae816119f6565b9050611440565b5083156115045760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161078d565b9392505050565b82805461151790611850565b90600052602060002090601f016020900481019282611539576000855561157f565b82601f1061155257805160ff191683800117855561157f565b8280016001018555821561157f579182015b8281111561157f578251825591602001919060010190611564565b5061158b92915061158f565b5090565b5b8082111561158b5760008155600101611590565b6000602082840312156115b657600080fd5b81356001600160e01b03198116811461150457600080fd5b60005b838110156115e95781810151838201526020016115d1565b838111156108c15750506000910152565b60208152600082518060208401526116198160408501602087016115ce565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261165457600080fd5b813567ffffffffffffffff8082111561166f5761166f61162d565b604051601f8301601f19908116603f011681019082821181831017156116975761169761162d565b816040528381528660208588010111156116b057600080fd5b836020870160208301376000602085830101528094505050505092915050565b80356001600160a01b03811681146116e757600080fd5b919050565b60008060006060848603121561170157600080fd5b833567ffffffffffffffff8082111561171957600080fd5b61172587838801611643565b9450602086013591508082111561173b57600080fd5b5061174886828701611643565b925050611757604085016116d0565b90509250925092565b6000806040838503121561177357600080fd5b61177c836116d0565b946020939093013593505050565b60008060006060848603121561179f57600080fd5b6117a8846116d0565b92506117b6602085016116d0565b9150604084013590509250925092565b6000602082840312156117d857600080fd5b5035919050565b600080604083850312156117f257600080fd5b82359150611802602084016116d0565b90509250929050565b60006020828403121561181d57600080fd5b611504826116d0565b6000806040838503121561183957600080fd5b611842836116d0565b9150611802602084016116d0565b600181811c9082168061186457607f821691505b6020821081141561188557634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526025908201527f63616e206f6e6c792062652063616c6c6564206279207468652070726f78792060408201526430b236b4b760d91b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600082198211156119475761194761191e565b500190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516119848160178501602088016115ce565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516119b58160288401602088016115ce565b01602801949350505050565b60008160001904831182151516156119db576119db61191e565b500290565b634e487b7160e01b600052603260045260246000fd5b600081611a0557611a0561191e565b50600019019056fea49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a2646970667358221220eeb82b97d99ec662e7a29a225599c8065fe11d71efd5b66eb562a80e2bc939d064736f6c634300080b0033";
