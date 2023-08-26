
import dotenv from 'dotenv';
import { ethers } from 'ethers';
import { CTOKToken__factory } from '../../../blockchain/typechain/factories/CTOKToken__factory';
import { BlockchainUrlsEnum } from './urls';

dotenv.config();

export const getCTokenContract = (
  url: BlockchainUrlsEnum = BlockchainUrlsEnum.POLYGON_MUMBAI
) => {
  const provider = new ethers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  return new ethers.Contract(
    process.env.CTOKEN_CONTRACT_ADDRESS!,
    CTOKToken__factory.abi,
    wallet
  );
};
