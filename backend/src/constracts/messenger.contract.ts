
import dotenv from 'dotenv';
import { ethers } from 'ethers';
import { Messenger__factory } from '../../../blockchain/typechain/factories/Messenger__factory';
import { BlockchainUrlsEnum } from './urls';

dotenv.config();

export const getMessengerContract = (
  url: BlockchainUrlsEnum = BlockchainUrlsEnum.POLYGON_MUMBAI
) => {
  const provider = new ethers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  return new ethers.Contract(
    process.env.MESSENGER_CONTRACT_ADDRESS!,
    Messenger__factory.abi,
    wallet
  );
};
