/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "SPOA",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    xdai: {
      url: "https://rpc.xdaichain.com/",
      accounts: [`0x2177fa16a60377df6b74493cff14c08a35384f1bc7cbaae3fe6ed8e699872d22`],
    },
    SPOA: {
      url: "https://sokol.poa.network",
      accounts: [`0x2177fa16a60377df6b74493cff14c08a35384f1bc7cbaae3fe6ed8e699872d22`],
    },
  },
};
