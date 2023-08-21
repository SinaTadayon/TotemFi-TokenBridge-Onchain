import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import config from "config";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const bscBridgeAgentProxyAdmin = config.get("peggedTotemTokenProxyAdmin");
  const taxationWallet = config.get("taxationWallet");

  const PeggedTotemTokenImpl = await deployments.get("PeggedTotemTokenImpl");

  const PeggedTotemTokenProxy = await deploy("PeggedTotemTokenProxy", {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
    args: [bscBridgeAgentProxyAdmin],
  });

  const PeggedTotemTokenProxyFactory = await ethers.getContractFactory(
    "PeggedTotemTokenProxy"
  );

  const PeggedTotemTokenImplFactory = await ethers.getContractFactory(
    "PeggedTotemTokenImpl"
  );

  const peggedTotemTokenProxy = PeggedTotemTokenProxyFactory.attach(
    PeggedTotemTokenProxy.address
  );

  const peggedTotemToken = PeggedTotemTokenImplFactory.attach(
    PeggedTotemTokenProxy.address
  );

  const upgradeEnabled = await peggedTotemTokenProxy.upgradeEnabled();

  if (upgradeEnabled) {
    await peggedTotemTokenProxy.upgradeTo(PeggedTotemTokenImpl.address);
    await peggedTotemTokenProxy.initialize(
      "Pegged Totem",
      "pTOTM",
      taxationWallet
    );
  }

  await peggedTotemToken.setTaxRate("0");
};

export default func;
export const tags = ["PeggedTotemTokenProxy"];
