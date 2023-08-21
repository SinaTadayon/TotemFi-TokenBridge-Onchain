import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import config from "config";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const bscBridgeAgentProxyAdmin = await config.get("bscBridgeAgentProxyAdmin");
  const BSCBridgeAgentImpl = await deployments.get("BSCBridgeAgentImpl");

  const BSCBridgeAgentProxy = await deploy("BSCBridgeAgentProxy", {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
    args: [bscBridgeAgentProxyAdmin],
  });

  const BSCBridgeAgent = await ethers.getContractFactory("BSCBridgeAgentProxy");

  const bscBridgeAgent = BSCBridgeAgent.attach(BSCBridgeAgentProxy.address);

  const upgradeEnabled = await bscBridgeAgent.upgradeEnabled();

  if (upgradeEnabled) {
    await bscBridgeAgent.upgradeTo(BSCBridgeAgentImpl.address);

    const pancakeswapRouter = await config.get("pancakeswapRouter");
    const pancakePair = await config.get("pancakePair");
    const wbnb = await config.get("wbnb");
    const totemToken = await config.get("totemToken");
    const slippagePercentage = await config.get("slippagePercentage");

    await bscBridgeAgent.initialize(
      pancakeswapRouter,
      pancakePair,
      wbnb,
      totemToken,
      slippagePercentage
    );
  }
};

export default func;
export const tags = ["BSCBridgeAgentProxy"];
