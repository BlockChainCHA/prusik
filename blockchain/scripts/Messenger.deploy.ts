import { ethers } from 'hardhat';

async function main() {
  const Messenger = await ethers.getContractFactory('Messenger');
  const messenger = await Messenger.deploy('Welcome to the Web3 from (smart contract) 🚀');

  await messenger.deployed();

  console.log('Greeter deployed to:', messenger.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
