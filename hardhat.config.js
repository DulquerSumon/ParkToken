require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-deploy");
// require("@nomiclabs/hardhat-etherscan");

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const BASE_SEPOLIA_URL = process.env.BASE_SEPOLIA_URL;
const Lisk_SEPOLIA_URL = process.env.Lisk_SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    sepolia: {
      chainId: 11155111,
      blockConfirmations: 6,
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    lisktestnet: {
      chainId: 4202,
      blockConfirmations: 6,
      url: Lisk_SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
      sepolia: ETHERSCAN_API_KEY,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
  mocha: {
    timeout: 200000,
  },
};
