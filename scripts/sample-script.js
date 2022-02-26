// run with command: npx hardhat run scripts/deploy.js

async function main() {
  // Grab contract factory
  const SmokeyCats = await hre.ethers.getContractFactory("SmokeyCats");

  // start deployment
  const smokeyCats = await SmokeyCats.deploy();
  await smokeyCats.deployed(); // not sure if this line is needed
  console.log("Smokey Cats deployed to:", smokeyCats.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
