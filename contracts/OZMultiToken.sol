// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract OZMultiToken is ERC1155, ERC1155Burnable {

    address payable public immutable owner;
    
    // MT: Multi Token type identifier
    uint public constant MT_0 = 0;
    uint public constant MT_1 = 1;
    uint public constant MT_2 = 2;

    uint[] public currentSupply = [50, 50, 50];
    uint public tokenPrice = 0.01 ether;

    // Change the URI address for your own address
    string public constant BASE_URI = "ipfs://myuriaddress/";
    
    // Contract Functions ==========================

    constructor() ERC1155(BASE_URI) {
        owner = payable(msg.sender);
    }

    function mint(uint256 id) external payable {
        
        require(id < 3, "This token does not exists");
        require(msg.value >= tokenPrice, "Insufficient payment");
        require(currentSupply[id] > 0, "Max supply reached");

        _mint(msg.sender, id, 1, "");
        currentSupply[id]--;
    }

    function withdraw() external {
        require(msg.sender == owner, "Caller is not owner");
        uint256 amount = address(this).balance;
        (bool success,) = owner.call{value: amount}("");
        require(success == true, "Failed to withdraw");
    }

    // Overrided function to change to a static URI
    // The {0} key pattern was not used because of problems with various
    // Web3 clients and marketplaces, like OpenSea
    function uri(uint256 id) public pure override returns (string memory) {
        require(id < 3, "This token does not exists");
        
        return string.concat(BASE_URI, Strings.toString(id), ".json");
    }

    function contractURI() public pure returns (string memory) {
        return "ipfs://mycontracturiaddress/";
    }    

}