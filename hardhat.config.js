require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "infurasep",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    infurasep: {
      url: "your api key of infura ",
      accounts: ["your metamask private key"],
    },
  },
  solidity: "0.8.20",
};
