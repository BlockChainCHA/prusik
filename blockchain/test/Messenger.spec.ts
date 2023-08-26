import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Messenger', function () {
  it("Should return the new message once it's changed", async function () {
    const Messenger = await ethers.getContractFactory('Messenger');
    const messenger = await Messenger.deploy('Hello, world!');
    await messenger.deployed();

    expect(await messenger.getMessage()).to.equal('Hello, world!');

    const setGreetingTx = await messenger.setMessage('Hola, mundo!');

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await messenger.getMessage()).to.equal('Hola, mundo!');
  });
});
