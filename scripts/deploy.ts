import { ethers } from "hardhat";

async function main() {

  const OZMultiToken = await ethers.getContractFactory("OZMultiToken");
  const cc = await OZMultiToken.deploy();

  await cc.deployed();

  console.log(`Contract OZMultiToken deployed to ${cc.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
