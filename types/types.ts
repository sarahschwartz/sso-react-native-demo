import { TokenPriceByAddressResult } from "alchemy-sdk";
import type { Account, Config, RpId } from "react-native-zksync-sso";
import { TransactionResponse } from "zksync-ethers/build/types";

export interface AccountInfo {
    name: string;
    userID: string;
    rpId: RpId;
}

export interface DeployedAccount {
    info: AccountInfo;
    address: string;
    uniqueAccountId: string;
}

export interface AccountDetails {
    info: AccountInfo;
    address: string;
    shortAddress: string;
    uniqueAccountId: string;
    explorerURL: string;
    balance?: string;
}

export function createAccountDetails(
    accountInfo: AccountInfo,
    deployedAccount: Account,
    balance?: string
): AccountDetails {
    const address = deployedAccount.address;
    return {
        info: accountInfo,
        address,
        shortAddress: shortenAddress(address),
        uniqueAccountId: deployedAccount.uniqueAccountId,
        explorerURL: `https://explorer.zksync.io/address/${address}`,
        balance
    };
}

function shortenAddress(address: string): string {
    if (!address || address.length < 10) return address;
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

export type { Config };

export interface User {
  address: `0x${string}`;
  name?: string;
  avatar?: string;
  isFriend?: boolean;
}

export interface Tx extends TransactionResponse
{
  isCurrentUser: boolean;
  isFriend: boolean;
}

export interface PriceObject extends TokenPriceByAddressResult {
  fetchTime: number;
}