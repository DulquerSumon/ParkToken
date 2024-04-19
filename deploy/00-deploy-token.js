const { network } = require("hardhat");
const { verify } = require("../utils/verify");
const { ethers } = require("ethers");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const args = ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"];
  const token = await deploy("ParkToken", {
    from: deployer,
    log: true,
    args: args,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  if (network.config.chainId == 4202 && process.env.ETHERSCAN_API_KEY) {
    await verify(token.address, args);
  }
  console.log(`Contract deployed at : ${token.address}`);
};

module.exports.tags = ["token"];
