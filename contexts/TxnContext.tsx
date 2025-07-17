import { getBlock, getUniqueTxns, getNewTransfers } from '@/utils/blocks';
import { Tx } from '@/types/types';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Provider } from 'zksync-ethers';
import { useAccount } from './AccountContext';

interface TxnContextType {
  txns: Tx[] | undefined;
}

const TxnContext = createContext<TxnContextType | undefined>(undefined);

export function TxnProvider({ children }: { children: ReactNode }) {
  const [txns, setTxns] = useState<Tx[]>();

    const rpcUrl = 'https://sepolia.era.zksync.dev';
    const maxTxnsLength = 10;

    const { accountDetails } = useAccount();
  
    useEffect(() => {
      const zkProvider = new Provider(rpcUrl);
  
      const handleBlock = async (blockNumber: number) => {
        const block = await getBlock(zkProvider, blockNumber);
        if (!block) {
          console.log(`Failed to fetch block ${blockNumber}`);
          return;
        }
        const newTransfers = await getNewTransfers(block, zkProvider, accountDetails!.address);
  
        if (newTransfers.length) {
          setTxns((prev = []) => {
            const merged = [...prev, ...newTransfers];
            const unique = getUniqueTxns(merged);
            unique.sort((a, b) => b.blockNumber! - a.blockNumber!);
            return unique.slice(0, maxTxnsLength);
          });
        }
      };
  
      zkProvider.on('block', handleBlock);
      return () => {
        zkProvider.off('block', handleBlock);
      };
    }, []);
  

  return (
    <TxnContext.Provider
      value={{
        txns
      }}
    >
      {children}
    </TxnContext.Provider>
  );
}

export function useTxns() {
  const context = useContext(TxnContext);
  if (context === undefined) {
    throw new Error('useTxns must be used within a TxnProvider');
  }
  return context;
}
