const Migrations = artifacts.require("Migrations");
const Marketplace = artifacts.require("Marketplace")
// const NFT = artifacts.require("Marketplace")

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Marketplace);
  // deployer.deploy(NFT, Marketplace.address);
};
