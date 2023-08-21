import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import config from "config";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const metisBridgeAgentProxyAdmin = config.get("metisBridgeAgentProxyAdmin");

  const MetisBridgeAgentImpl = await deployments.get("MetisBridgeAgentImpl");
  const PeggedTotemTokenProxy = await deployments.get("PeggedTotemTokenProxy");

  const MetisBridgeAgentProxy = await deploy("MetisBridgeAgentProxy", {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
    args: [metisBridgeAgentProxyAdmin],
  });

  const MetisBridgeAgent = await ethers.getContractFactory(
    "MetisBridgeAgentProxy"
  );

  const metisBridgeAgent = MetisBridgeAgent.attach(
    MetisBridgeAgentProxy.address
  );

  const upgradeEnabled = await metisBridgeAgent.upgradeEnabled();

  const PeggedTotemTotemImpl = await ethers.getContractFactory(
    "PeggedTotemTokenImpl"
  );
  const peggedTotemToken = PeggedTotemTotemImpl.attach(
    PeggedTotemTokenProxy.address
  );

  if (upgradeEnabled) {
    await metisBridgeAgent.upgradeTo(MetisBridgeAgentImpl.address);

    // await metisBridgeAgent.initialize(
    //   "totem bridge",
    //   "1",
    //   PeggedTotemTokenProxy.address
    // );

    // await peggedTotemToken.grantRole(
    //   peggedTotemToken.SWAPPER_ROLE(),
    //   MetisBridgeAgentProxy.address
    // );
  }
};

export default func;
export const tags = ["MetisBridgeAgentProxy"];
