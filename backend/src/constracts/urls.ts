export const BlockchainUrlsEnum = {
  POLYGON_MAINNET: 'https://polygon-mainnet.infura.io',
  POLYGON_MUMBAI: 'https://rpc-mumbai.maticvigil.com',
  LOCALHOST: 'http://127.0.0.1:8545/'
} as const;

export type BlockchainUrlsEnum = (typeof BlockchainUrlsEnum)[keyof typeof BlockchainUrlsEnum];
