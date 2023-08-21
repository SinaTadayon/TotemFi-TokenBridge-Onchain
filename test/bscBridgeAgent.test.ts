// import { expect, use } from "chai";
// import { ethers } from "hardhat";
// import { Address } from "hardhat-deploy/dist/types";
// import { Signer, BigNumber, BigNumberish, Bytes } from "ethers";
// import {
//   deployMockContract,
//   MockContract,
// } from "@ethereum-waffle/mock-contract";
// import { solidity } from "ethereum-waffle";
// import { Contract } from "@ethersproject/contracts";
// import pancakeswapRouter from "@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json";

// import hre from "hardhat";

// import { BSCBridgeAgentImpl } from "../src/types/BSCBridgeAgentImpl";
// import { BSCBridgeAgentImpl__factory } from "../src/types/factories/BSCBridgeAgentImpl__factory";
// import { BSCBridgeAgentProxy } from "../src/types/BSCBridgeAgentProxy";
// import { BSCBridgeAgentProxy__factory } from "../src/types/factories/BSCBridgeAgentProxy__factory";

// use(solidity);

// let deployer: Signer;
// let owner: Signer;
// let proxyAdmin: Signer;

// let ownerAddress: Address;
// let proxyAdminAddress: Address;

// let bscBridgeAgentImpl: BSCBridgeAgentImpl;
// let bscBridgeAgentProxy: BSCBridgeAgentProxy;
// let bscBridgeAgent: Contract;

// let mockPancakeswapRouter: MockContract;
// let mockPancakeswapPair: MockContract;

// const deployBSCBridgeAgent = async () => {
//   const bscBridgeAgentImplFactory = new BSCBridgeAgentImpl__factory(owner);

//   bscBridgeAgentImpl = await bscBridgeAgentImplFactory.deploy();

//   const bscBridgeAgentProxyFactory = new BSCBridgeAgentProxy__factory(owner);

//   bscBridgeAgentProxy = await bscBridgeAgentProxyFactory.deploy(
//     proxyAdminAddress
//   );

//   await bscBridgeAgentProxy.upgradeTo(bscBridgeAgentImpl.address);

//   await bscBridgeAgentProxy.initialize(
//     _pancakeswapRouter,
//     _pancakePair,
//     _wbnb,
//     _totemToken,
//     _slippagePercentage
//   );

//   bscBridgeAgent = bscBridgeAgentImplFactory.attach(
//     bscBridgeAgentProxy.address
//   );
// };

// describe("BSCBridgeAgent contract", function () {
//   before("deploy and initialize", async () => {
//     [deployer, owner, proxyAdmin] = await ethers.getSigners();

//     ownerAddress = await owner.getAddress();
//     proxyAdminAddress = await proxyAdmin.getAddress();

//     mockPancakeswapRouter = await deployMockContract(
//       deployer,
//       pancakeswapRouter.abi
//     );

//     await deployBSCBridgeAgent();
//   });
// });
