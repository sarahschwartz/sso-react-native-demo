import { Tx } from "@/types/types";
import { type Provider, types } from "zksync-ethers";
import { friends } from "./mockData";

export const handleTx = async (txDetails: types.TransactionResponse, userAddress: string) => {
  if (!txDetails) return;

  const isCurrentUser =
    txDetails.from === userAddress ||
    txDetails.to === userAddress;

  const isFriend = friends.some(
    (f) => f.address === txDetails.from || f.address === txDetails.to
  );

  if (!isCurrentUser && !isFriend) return;

  const tx = { ...txDetails, isCurrentUser, isFriend } as Tx;
  return tx;
};

export const getNewTransfers = async (
  block: types.Block,
  provider: Provider,
  userAddress: string
): Promise<Tx[]> => {
  const newTransfers: Tx[] = [];
  if (
    !block ||
    !Array.isArray(block.transactions) ||
    !block.transactions.length
  ) {
    return newTransfers;
  }
  for (const txHash of block.transactions) {
    const txDetails = await provider.getTransaction(txHash);
    const handled = await handleTx(txDetails, userAddress);
    if (handled) newTransfers.push(handled);
  }
  return newTransfers;
};

export const getBlock = async (
  provider: Provider,
  blockNumber: number
): Promise<types.Block | null> => {
  try {
    const block = await provider.getBlock(blockNumber, true);
    return block;
  } catch (err) {
    console.error(`Failed to fetch block ${blockNumber}`, err);
    return null;
  }
};

export function getUniqueTxns(items: Tx[]): Tx[] {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (!item) return false;
    if (seen.has(item.hash)) return false;
    seen.add(item.hash);
    return true;
  });
}
