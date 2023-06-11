const Marketplace = artifacts.require("Marketplace")
const NFT = artifacts.require("NFT")

module.exports = function (deployer) {
    deployer.deploy(Marketplace);
    deployer.deploy(NFT, Marketplace.address);
};