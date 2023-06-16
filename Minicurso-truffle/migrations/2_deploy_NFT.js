const NFT =  artifacts.require("NFT")

module.exports = function (deployer) {
    deployer.deploy(NFT, "0x25061EDbF0ad151876030071CeCcC967e90157CB");
  };
  
