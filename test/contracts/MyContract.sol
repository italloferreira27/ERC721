// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "../node_modules/hardhat/console.sol";

contract MyContract is ERC721{
    constructor(string memory name, string memory symbol) 
        ERC721(name, symbol){

            console.log("name ->", name);
            console.log("symbol ->", symbol);
            console.log("msg.sender ->", msg.sender);

        }

}