import { time, loadFixture} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("OZMultiToken", function () {
  
  async function deployFixture() {
    
    const [owner, user] = await ethers.getSigners();
    const OZMultiToken = await ethers.getContractFactory("OZMultiToken");
    const cc = await OZMultiToken.deploy();

    return { cc, owner, user };
  }
    
  it("Should...", async function () {
    const { cc, owner, user } = await loadFixture(deployFixture);

    expect(1).to.equal(1);
  });

});
