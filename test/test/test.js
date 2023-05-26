const { expect } = require('chai');

describe("MyContract", function() {

    it("Retornar o nome e simbolo correto", async function (){

        const MyContract = await hre.ethers.getContractFactory("MyContract");

        const mycontractDeployed = await MyContract.deploy("MyContractname", "MCN");

        await mycontractDeployed.deployed();

        expect(await mycontractDeployed.name()).to.equal("MyContractname");
        
        expect(await mycontractDeployed.symbol()).to.equal("MCN")
    })
})