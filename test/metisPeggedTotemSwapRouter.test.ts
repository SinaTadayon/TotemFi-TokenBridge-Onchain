// import { expect, use } from "chai";
// import { ethers } from "hardhat";
// import { Address } from "hardhat-deploy/dist/types";
// import { Signer, BigNumber, BigNumberish, Bytes } from "ethers";
// import { solidity } from "ethereum-waffle";
// import { Contract } from "@ethersproject/contracts";
//
// import hre from "hardhat";
//
// import { PeggedTotemTokenImpl } from "../src/types/PeggedTotemTokenImpl";
// import { PeggedTotemTokenImpl__factory } from "../src/types/factories/PeggedTotemTokenImpl__factory";
// import { PeggedTotemTokenProxy } from "../src/types/PeggedTotemTokenProxy";
// import { PeggedTotemTokenProxy__factory } from "../src/types/factories/PeggedTotemTokenProxy__factory";
//
// import { MetisBridgeAgentImpl } from "../src/types/MetisBridgeAgentImpl";
// import { MetisBridgeAgentImpl__factory } from "../src/types/factories/MetisBridgeAgentImpl__factory";
// import { MetisBridgeAgentProxy } from "../src/types/MetisBridgeAgentProxy";
// import { MetisBridgeAgentProxy__factory } from "../src/types/factories/MetisBridgeAgentProxy__factory";
//
// import signData from "./signatureVerification.test";
//
// use(solidity);
//
// let owner: Signer;
// let recipient: Signer;
// let proxyAdmin: Signer;
//
// let ownerAddress: Address;
// let recipientAddress: Address;
// let proxyAdminAddress: Address;
//
// let peggedTotemTokenImpl: PeggedTotemTokenImpl;
// let peggedTotemTokenProxy: PeggedTotemTokenProxy;
// let peggedTotemToken: Contract;
//
// let metisBridgeAgentImpl: MetisBridgeAgentImpl;
// let metisBridgeAgentProxy: MetisBridgeAgentProxy;
// let metisBridgeAgent: Contract;
//
// let dataHash: Bytes;
// const bscTxHash =
//   "0x8bd7b30358a698c71ac372f157ab9eb911842b054ea6206d6c5dea58797e44f0";
// const zeroHash =
//   "0x0000000000000000000000000000000000000000000000000000000000000000";
//
// const name = "Pegged Totem Token";
// const symbol = "pTOTM";
//
// const message: [
//   string,
//   string,
//   string,
//   BigNumber,
//   BigNumber,
//   BigNumber,
//   BigNumber,
//   BigNumberish,
//   Address
// ] = [
//   "peg-in",
//   "MTS",
//   "TOTM",
//   BigNumber.from(10).pow(18).mul(1),
//   BigNumber.from(10).pow(18).mul(8),
//   BigNumber.from(10).pow(18).mul(1700),
//   BigNumber.from(1),
//   BigNumber.from(0),
//   "0x0000000000000000000000000000000000000000",
// ];
//
// const deployPeggedTotemToken = async () => {
//   const peggedTotemTokenImplFactory = new PeggedTotemTokenImpl__factory(owner);
//
//   peggedTotemTokenImpl = await peggedTotemTokenImplFactory.deploy();
//
//   const peggedTotemTokenProxyFactory = new PeggedTotemTokenProxy__factory(
//     owner
//   );
//
//   peggedTotemTokenProxy = await peggedTotemTokenProxyFactory.deploy(
//     proxyAdminAddress
//   );
//
//   await peggedTotemTokenProxy.upgradeTo(peggedTotemTokenImpl.address);
//
//   await peggedTotemTokenProxy.initialize(name, symbol, ownerAddress);
//
//   peggedTotemToken = peggedTotemTokenImplFactory.attach(
//     peggedTotemTokenProxy.address
//   );
// };
//
// const deployMetisBridgeAgent = async () => {
//   const metisBridgeAgentImplFactory = new MetisBridgeAgentImpl__factory(owner);
//
//   metisBridgeAgentImpl = await metisBridgeAgentImplFactory.deploy();
//
//   const metisBridgeAgentProxyFactory = new MetisBridgeAgentProxy__factory(
//     owner
//   );
//
//   metisBridgeAgentProxy = await metisBridgeAgentProxyFactory.deploy(
//     proxyAdminAddress
//   );
//
//   await metisBridgeAgentProxy.upgradeTo(metisBridgeAgentImpl.address);
//
//   await metisBridgeAgentProxy.initialize(
//     "totem bridge",
//     "1",
//     peggedTotemTokenProxy.address
//   );
//
//   await peggedTotemToken.grantRole(
//     await peggedTotemToken.SWAPPER_ROLE(),
//     metisBridgeAgentProxy.address
//   );
//
//   metisBridgeAgent = metisBridgeAgentImplFactory.attach(
//     metisBridgeAgentProxy.address
//   );
// };
//
// describe("MetisBridgeAgent contract", function () {
//   before("deploy and initialize", async () => {
//     [owner, recipient, proxyAdmin] = await ethers.getSigners();
//
//     ownerAddress = await owner.getAddress();
//     recipientAddress = await recipient.getAddress();
//     proxyAdminAddress = await proxyAdmin.getAddress();
//
//     await deployPeggedTotemToken();
//     await deployMetisBridgeAgent();
//   });
//   it("should set chainId correct", async function () {
//     const chainId = await hre.network.provider.send("eth_chainId");
//     expect((await metisBridgeAgent.domain()).chainId.toString()).to.be.equal(
//       BigNumber.from(chainId)
//     );
//   });
//   it("user should pegIn successfully", async function () {
//     const deadline = Date.now() + 5000;
//     message[7] = deadline;
//     message[8] = recipientAddress;
//
//     const metisBridgeAgentAsRecipient = metisBridgeAgent.connect(recipient);
//
//     const signature = await signData(
//       recipientAddress,
//       deadline,
//       metisBridgeAgentProxy.address,
//       ownerAddress
//     );
//
//     const txn = await metisBridgeAgentAsRecipient.pegInMTS2TOTM(
//       message,
//       signature,
//       {
//         value: BigNumber.from(10).pow(18).mul(1),
//       }
//     );
//
//     const receipt = await txn.wait();
//
//     await expect(txn).to.emit(metisBridgeAgentAsRecipient, "swapStarted");
//
//     dataHash = receipt.logs[0].topics[2];
//   });
//
//   it("owner entered zero txhash to fill peg-in", async () => {
//     const metisBridgeAgentAsOwner = metisBridgeAgent.connect(owner);
//
//     await expect(
//       metisBridgeAgentAsOwner.fillMTS2TOTMPegIn(
//         recipientAddress,
//         dataHash,
//         zeroHash,
//         message[0],
//         message[4],
//         message[5]
//       )
//     ).to.be.revertedWith("wrong txhash");
//   });
//
//   it("owner should fill peg-in", async () => {
//     const metisBridgeAgentAsOwner = metisBridgeAgent.connect(owner);
//
//     await expect(
//       metisBridgeAgentAsOwner.fillMTS2TOTMPegIn(
//         recipientAddress,
//         dataHash,
//         bscTxHash,
//         message[0],
//         message[4],
//         message[5]
//       )
//     ).to.emit(metisBridgeAgentAsOwner, "swapFilled");
//   });
//
//   it("user should claim successfully", async () => {
//     const metisBridgeAgentAsRecipient = metisBridgeAgent.connect(recipient);
//
//     let recipientBalance = await peggedTotemToken.balanceOf(recipientAddress);
//
//     await expect(
//       metisBridgeAgentAsRecipient.claimMTS2TOTMPegIn(dataHash)
//     ).to.emit(metisBridgeAgentAsRecipient, "swapClaimed");
//
//     recipientBalance =
//       recipientBalance + (await peggedTotemToken.balanceOf(recipientAddress));
//
//     expect(await recipientBalance).to.be.equal(message[5]);
//   });
// });
