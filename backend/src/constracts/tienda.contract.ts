
import dotenv from 'dotenv';
import { ethers } from 'ethers';
import { Tienda__factory } from '../../../blockchain/typechain/factories/Tienda__factory';
import { BlockchainUrlsEnum } from './urls';

dotenv.config();

export const getTiendaContract = (
  url: BlockchainUrlsEnum = BlockchainUrlsEnum.POLYGON_MUMBAI
) => {
  const provider = new ethers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  return new ethers.Contract(
    process.env.TIENDA_CONTRACT_ADDRESS!,
    Tienda__factory.abi,
    wallet
  );
};
