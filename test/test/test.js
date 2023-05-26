const { expect } = require('chai');

describe("MyContract", function() {

    it("Retornar o nome", async function (){

        const MyContract = await hre.ethers.getContractFactory("MyContract");

        const mycontractDeployed = await MyContract.deploy("MyContractname", "MCN");

        await mycontractDeployed.deployed();

        expect(await mycontractDeployed.name()).to.equal("MyContractname");

    });
});