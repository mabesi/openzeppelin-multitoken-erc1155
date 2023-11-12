# OPENZEPPELIN MULTI TOKEN ERC-1155

A professional solidity Multitoken [ERC-1155 Standard](https://eips.ethereum.org/EIPS/eip-1155) contract example based on OpenZeppelin library.

## :speech_balloon: Description

<p align="justify">ERC-1155 is a widely adopted standard for fungible and non-fungible tokens on the Ethereum blockchain. It was proposed as an improvement to the ERC-20 and ERC-721 standards, combining the functionalities of both into a single standard.</p>
<p align="justify">OpenZeppelin Contracts helps you minimize risk by using battle-tested libraries of smart contracts for Ethereum and other blockchains. It includes the most used implementations of ERC standards.</p>
<p align="justify">This project is a simple implementation of OpenZeppelin ERC-1155 standard, with the most important functionalities for an Multi Token Smart Contract, to help you save time in coding.</p>

<table>
    <tr>
        <td colspan='2'>
            <kbd>
                <img src="./assets/oz_erc1155_contract.png" />
            </kbd>
        </td>
    </tr>
<table>

### 🛠️ Features

The OpenZeppelin ERC-1155 Multi Token contract offers these main features:

- **Multi-Token Support**: ERC-1155 contracts can manage multiple token types within a single contract. This means you can have both fungible (e.g., currencies) and non-fungible (e.g., unique assets) tokens managed together.
- **Gas Efficiency**: ERC-1155 is designed to be gas-efficient by allowing batch transfers and batch approvals, reducing the number of individual transactions required.
- **Single Contract, Multiple Tokens**: Unlike other token standards like ERC-20 or ERC-721, which require separate contracts for each token, ERC-1155 allows you to manage multiple token types under a single contract, reducing deployment and maintenance costs.
- **Interface Compatibility**: ERC-1155 adheres to a standard interface, ensuring compatibility with various applications, marketplaces, and wallets that support this standard.

### 🏗️ Built With

The core of this project was built using all these great tools:

- [Solidity](https://soliditylang.org/) - Ethereum Programming Language
- [TypeScript](https://www.typescriptlang.org/) - Typed Programming Language
- [Hardhat](https://hardhat.org/) - Development Environment for Ethereum Software
- [Ethers.js](https://ethers.org/) - Web3 Library
- [OpenZepellin](https://www.openzeppelin.com/) - Web3 Solidity Contract Libraries
- [Node.js](https://nodejs.org/) - JavaScript Runtime Environment

In addition, in order to function fully and satisfactorily, this project uses resources from the following services:

- [Pinata](https://app.pinata.cloud/) - IPFS File Sharing
- [SnowTrace](https://snowtrace.io/) - Avalanche C-Chain Block Explorer

## Getting Started

### 📋 Prerequisites

- Node.js
- CLI/Terminal
- IDE or Text Editor
- Wallet address in an EVM compatible chain
- Balance to deploy the Smart Contract

### :gear: Configuration

Clone the `.env.example` file into a new `.env` file.
After this, adjust the `SECRET` with your seed phrase, `API_KEY` with your API Key (get it in a production block explorer), `RPC_URL` with the RPC url of your chain  and `CHAIN_ID` with the Chain ID of the chain.

```bash
# MetaMask mnemonic 12-word phrase
SECRET=

# Blockchain API Key (get in EtherScan, BSC Scan, SnowTrace,...)
API_KEY=

# RPC Server URL (e.g. "https://api.avax-test.network/ext/bc/C/rpc")
RPC_URL=

# RPC Chain ID (e.g 43113)
CHAIN_ID=
```

Change the `currentSupply` for the three token types initial supply and the `tokenPrice` for your desired initial value.

```solidity
    uint[] public currentSupply = [50, 50, 50];
    uint public tokenPrice = 0.01 ether;
```

After create the [Metadata URI JSON Schema](https://eips.ethereum.org/EIPS/eip-721#specification), adjust the `BASE_URI` address for your own address.

```solidity
    string public constant BASE_URI = "ipfs://myuriaddress/";
```

And, finally, change the Contract URI metadata address:

```solidity
    function contractURI() public pure returns (string memory) {
        return "ipfs://mycontracturiaddress/";
    }
```

### 👨‍💻 Testing

To test your OpenZeppelin ERC-1155 smart contract run this command:

```bash
$ npm test
```

To test and view the tests coverage of your OpenZeppelin ERC-1155 smart contract run this command:

```bash
$ npm run cov
```

### 👷 Deploy

To deploy your OpenZeppelin ERC-1155 smart contract run this command:

```bash
$ npm run deploy
```

With the deployed contract address in the hands, run this command to verify it:

```bash
$ npm run verify <contract_address>
```

### :arrow_forward: Usage

You can interact with your deployed contract in two ways:

1. **By your chain's block explorer**

- **Get the Contract Address**: First, you need to know the address of the deployed smart contract.
- **Open the Block Explorer**: Choose a blockchain block explorer that supports the network where your contract is deployed. Examples of popular block explorers are [Etherscan](https://etherscan.io/) for Ethereum, [BscScan](https://bscscan.com/) for BNB Smart Chain, [SnowTrace](https://snowtrace.io/) for Avalanche C-Chain and [PolygonScan](https://polygonscan.com/) for Polygon PoS Chain.
- **Search for the Contract Address**: In the search bar of the block explorer, enter the contract address and click "Search". The block explorer will display the contract's details, including its code, transactions, and events.
- **Functions**: Look for a "Read Contract" or "Write Contract" section.
  - **Read Functions**: For read-only functions (functions that don't modify the state), you can call them directly from the block explorer's interface, and it will display the returned value.
  - **Write Functions**: To interact with write functions (functions that modify the state), you will need to provide the necessary parameters and possibly your wallet's signature for authentication. After filling in the required details, submit the transaction.
- **Transaction Monitoring**: Block explorers also provide real-time transaction monitoring. After initiating a contract function execution, the explorer will display the transaction details, including the transaction hash, status, and gas fees.

_It's essential to be cautious when executing write functions, as blockchain transactions are irreversible. Always double-check the inputs._

2. **By a Frontend DApp**

Use the [Mabesi OZ Multi Token Dapp](https://github.com/mabesi/dapp-multitoken) as your frontend interface user. This DApp was made with React/Next.js to be integrant part of this Multi Token smart contract.

### 🔧 Troubleshooting

Contracts published on the blockchain are immutable. Thus, if it is necessary to correct any errors or make any changes, you must deploy again, generating a new contract address and reinitializing all state variable information.

It is possible to perform data migration in case of a new deployment of the contract, but for this you must make a plan, performing the backup beforehand and creating a migration script.

## Back Matter

### :clap: Acknowledgements

Thanks to all these amazing people and tools that served as a source of knowledge or were an integral part in the construction of this project.

- [LuizTools](https://www.luiztools.com.br/) - JavaScript and Web3 Online Courses

### 🔎 See Also

Enjoy these similar projects that can help you as a way of learning or as a basis for creating a larger project.

- [Basic Token ERC-20](https://github.com/mabesi/solidity-coin-erc20)
- [Basic Token BEP-20](https://github.com/mabesi/solidity-coin-bep20)
- [Basic NFT ERC-721](https://github.com/mabesi/solidity-nft-erc721)
- [Basic Azuki NFT ERC-721A](https://github.com/mabesi/azuki-nft)
- [Mabesi Azuki NFT DApp](https://github.com/mabesi/dapp-nft)
- [Basic Multi Token ERC-1155](https://github.com/mabesi/solidity-multitoken-erc1155)
- [OpenZeppelin Upgradeable Proxy ERC-1967](https://github.com/mabesi/openzepellyn-upgradeable-proxy-erc1967)

### ✒️ Authors & Contributors

| [<img loading="lazy" src="https://github.com/mabesi/mabesi/blob/master/octocat-mabesi.png" width=115><br><sub>Plinio Mabesi</sub>](https://github.com/mabesi) |
| :---: |


### 👮🏼‍♂️ Legal Disclaimer

<p align="justify">This tool was created for educational purposes and has the sole purpose of serving as an example of the implementation of a Smart Contract following the proposed standards, in accordance with what is contained in the references.</p>
<p align="justify">The use of this tool, for any purpose, will occur at your own risk, being your sole responsibility for any legal implications arising from it.</p>
<p align="justify">It is also the end user's responsibility to know and obey all applicable local, state and federal laws. Developers take no responsibility and are not liable for any misuse or damage caused by this program.</p>

### 📜 License

This project is licensed under the [MIT License](LICENSE.md).