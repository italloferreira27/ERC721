// const { hexStripZeros } = require("@ethersproject/bytes");

async function main () {

    const MyContract = await hre.ethers.getContractFactory("MyContract");
    
    const mycontractDeployed = await MyContract.deploy("ERC721", "NFT");

    await mycontractDeployed.deployed();

    console.log("Deployed to: ", mycontractDeployed.address);

}

main() 
    .then(() => ProcessingInstruction.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });