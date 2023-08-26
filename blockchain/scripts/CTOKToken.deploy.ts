import { ethers } from 'hardhat';

async function main() {
  const CTOKToken = await ethers.getContractFactory('CTOKToken');
  const initialSUupply = ethers.utils.parseUnits("1000",18)

  const token = await CTOKToken.deploy(initialSUupply)

  await token.deployed()

  console.log('CTOKToken deployed to:', token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
