const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  it("Should mint and transfer an NFT to someone", async function () {
    const SmokeyCats = await ethers.getContractFactory("SmokeyCats");
    const smokeycats = await SmokeyCats.deploy();
    await smokeycats.deployed();

    const recipient = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
    const metadataURI = "cid/test.png";

    let balance = await smokeycats.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await smokeycats.payToMint(
      recipient,
      metadataURI,
      { value: ethers.utils.parseEther("0.05") }
    );
  });
});
