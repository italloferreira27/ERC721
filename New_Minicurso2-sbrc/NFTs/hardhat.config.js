require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
const { PRIVATE_KEY } = process.env;
module.exports = {
  defaultNetwork: "Ganache",
  networks: {
    hardhat: {
    },
     Ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}

/** @type import('hardhat/config').HardhatUserConfig 
module.exports = {
  solidity: "0.8.18",
};
*/