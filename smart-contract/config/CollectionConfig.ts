import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ArbEye',
  tokenName: 'ARB EYE ',
  tokenSymbol: 'AE',
  hiddenMetadataUri: 'ipfs://QmVP17PuBLZ8m3mHe1fToLwoZGfSiGncaMywqYJRF2PVrT/hidden.json',
  maxSupply: 25,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.0,
    maxMintAmountPerTx: 2,
  },
  contractAddress: null,
  marketplaceIdentifier: "0x0aa0B325FAa5F967e35357DB2465af6f59735e85",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
