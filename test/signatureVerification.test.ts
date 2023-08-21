import { expect, use } from "chai";
import { ethers } from "hardhat";
import { Address } from "hardhat-deploy/dist/types";
import { Signer, BigNumber, BigNumberish, Bytes } from "ethers";
import { solidity } from "ethereum-waffle";

import hre from "hardhat";

import { SignatureVerification } from "../src/types/SignatureVerification";
import { SignatureVerification__factory } from "../src/types/factories/SignatureVerification__factory";

use(solidity);

let deployer: Signer;
let signer: Signer;
let recipient: Signer;

let signerAddress: Address;
let recipientAddress: Address;

let signatureVerification: SignatureVerification;

let signature: Bytes;

const name = "totem bridge";
const version = "1";
let chainId: BigNumberish;
let verifyingContract: Address;

const amount = BigNumber.from(10).pow(18).mul(1);
const fee = BigNumber.from(10).pow(18).mul(8);
const exchange = BigNumber.from(10).pow(18).mul(1700);
const nonce = BigNumber.from(1);
let deadline: BigNumberish;
const swapType = "peg-in";
const base = "MTS";
const quote = "TOTM";

const deploySignatureVerification =
  async (): Promise<SignatureVerification> => {
    const signatureVerificationFactory = new SignatureVerification__factory(
      deployer
    );

    const signatureVerification = signatureVerificationFactory.deploy();

    return signatureVerification;
  };

const signData = async (
  recipientAddress: Address,
  deadline: BigNumberish,
  verifyingContract: Address,
  signerAddress: Address
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const messageParams = JSON.stringify({
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
      Bridge: [
        { name: "swapType", type: "string" },
        { name: "account", type: "address" },
        { name: "base", type: "string" },
        { name: "quote", type: "string" },
        { name: "fee", type: "uint256" },
        { name: "amount", type: "uint256" },
        { name: "exchange", type: "uint256" },
        { name: "deadline", type: "uint256" },
        { name: "nonce", type: "uint256" },
      ],
    },
    primaryType: "Bridge",
    domain: {
      name: name,
      version: version,
      chainId: chainId.toString(),
      verifyingContract: verifyingContract,
    },
    message: {
      swapType: swapType,
      account: recipientAddress,
      base: base,
      quote: quote,
      fee: fee.toString(),
      amount: amount.toString(),
      exchange: exchange.toString(),
      deadline: deadline.toString(),
      nonce: nonce.toString(),
    },
  });

  const signature = await hre.network.provider.send("eth_signTypedData_v4", [
    signerAddress,
    messageParams,
  ]);

  console.log(`signature length: :${signature.length}, signature: ${signature}`)
  return signature;
};

describe("VerifySignature library", async () => {
  before("deploy and set", async () => {
    [deployer, signer, recipient] = await ethers.getSigners();

    signerAddress = await signer.getAddress();
    recipientAddress = await recipient.getAddress();

    signatureVerification = await deploySignatureVerification();

    chainId = await hre.network.provider.send("eth_chainId");

    deadline = Date.now() + 5000;

    verifyingContract = "0xAd572e5F6a2d53bCf768e1b13A743a6cDC760A82";

    signature = await signData(
      recipientAddress,
      deadline,
      verifyingContract,
      signerAddress
    );

    await signatureVerification.setDomain(
      name,
      version,
      BigNumber.from(chainId),
      verifyingContract
    );
    await signatureVerification.setMessage(
      recipientAddress,
      amount,
      fee,
      exchange,
      nonce,
      deadline,
      swapType,
      base,
      quote
    );
  });

  it("should verify signature", async () => {
    expect(await signatureVerification.verify(signerAddress, signature)).to.be
      .true;
  });
});

export default signData;
