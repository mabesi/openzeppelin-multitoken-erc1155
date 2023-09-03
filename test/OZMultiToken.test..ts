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
    
  it("Should burn", async function () {
    const { cc, owner, user } = await loadFixture(deployFixture);

    await cc.mint(0, { value: ethers.parseEther("0.01")});
    await cc.burn(owner.address, 0, 1);
    const balance = await cc.balanceOf(owner.address, 0);
    const supply = await cc.currentSupply(0);

    expect(balance).to.equal(0, "Cannot burn (balance)");
    expect(supply).to.equal(49, "Cannot burn (supply)");
  });

  it("Should burn (approved)", async function () {
    const { cc, owner, user } = await loadFixture(deployFixture);

    await cc.mint(0, { value: ethers.parseEther("0.01")});
    await cc.setApprovalForAll(user.address, true);
    const approved = await cc.isApprovedForAll(owner.address, user.address);

    const instance = cc.connect(user);
    await instance.burn(owner.address, 0, 1);

    const balance = await cc.balanceOf(owner.address, 0);
    const supply = await cc.currentSupply(0);

    expect(balance).to.equal(0, "Cannot burn (approved)(balance)");
    expect(supply).to.equal(49, "Cannot burn (approved)(supply)");
    expect(approved).to.equal(true, "Cannot burn (approved)(approved)");
  });

  it("Should NOT burn (balance)", async function () {
    const { cc, owner, user } = await loadFixture(deployFixture);
    await expect(cc.burn(owner.address, 0, 1)).to.be.revertedWith("ERC1155: burn amount exceeds balance");
  });

  it("Should NOT burn (permission)", async function () {
    const { cc, owner, user } = await loadFixture(deployFixture);

    await cc.mint(0, { value: ethers.parseEther("0.01")});
    const instance = cc.connect(user);

    await expect(instance.burn(owner.address, 0, 1)).to.be.revertedWith("ERC1155: caller is not token owner or approved");
  });


});
