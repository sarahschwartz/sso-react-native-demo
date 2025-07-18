import { TokenPriceByAddressResult } from "alchemy-sdk";
import type { Config, RpId } from "react-native-zksync-sso";
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