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
    
  it("Should mint", async function () {
    const { cc, owner, user } = await loadFixture(deployFixture);

    await cc.mint(0, { value: ethers.parseEther("0.01")});
    const balance = await cc.balanceOf(owner.address, 0);
    const supply = await cc.currentSupply(0);

    expect(balance).to.equal(1, "Cannot mint (balance)");
    expect(supply).to.equal(49, "Cannot mint (supply)");
  });

  it("Should NOT mint (not exists)", async function () {
    const { cc, owner, user } = await loadFixture(deployFixture);

    await expect(cc.mint(3, { value: ethers.parseEther("0.01")})).to.be.revertedWith("This token does not exists");
  });
  
  it("Should NOT mint (payment)", async function () {
    const { cc, owner, user } = await loadFixture(deployFixture);

    await expect(cc.mint(0, { value: ethers.parseEther("0.001")})).to.be.revertedWith("Insufficient payment");
  });

  it("Should NOT mint (supply)", async function () {
    const { cc, owner, user } = await loadFixture(deployFixture);

    for (let i=0; i < 50; i++)
      await cc.mint(0, { value: ethers.parseEther("0.01")});

    await expect(cc.mint(0, { value: ethers.parseEther("0.01")})).to.be.revertedWith("Max supply reached");
  });

    
  // it("Should mint", async function () {
  //   const { cc, owner, user } = await loadFixture(deployFixture);

  //   expect(1).to.equal(1);
  // });

});
