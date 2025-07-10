import { Alchemy, type TokenAddressRequest } from 'alchemy-sdk';
import { utils } from "zksync-ethers"
import { PriceObject } from '@/types/types';

export const getLatestPrices = async (addresses: TokenAddressRequest[] = []) => {
  try {
    const alchemy = new Alchemy();
    const zksyncSepoliaETH: TokenAddressRequest = { network: alchemy.config.network, address: utils.ETH_ADDRESS};
    const response = await alchemy.prices.getTokenPriceByAddress([zksyncSepoliaETH, ...addresses]);
    return response.data;
  } catch (error) {
    console.error('Error fetching prices:', error);
  }
};

export const getPrices = async () => {
  try {
     const prices = await getLatestPrices();
     if(!prices) {
       console.log('No prices found');
       return undefined;
     }
     const currentTime = Date.now();
     const priceObject: PriceObject = {
       ...prices[0],
       fetchTime: currentTime
     }
     return priceObject;
  } catch (error) {
    console.error('Error fetching prices:', error);
  }
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};
