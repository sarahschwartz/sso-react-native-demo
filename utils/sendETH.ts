import { loadConfig } from "@/utils/loadConfig";
import { Transaction, type RpId } from "react-native-zksync-sso";
import { AccountClient } from "./authenticate/accountClient";

interface FromAccount {
  info: {
    rpId: RpId;
    name?: string;
    userID?: string;
  };
  address: string;
  uniqueAccountId: string;
}

export async function sendETHwithSSO(
  fromAccount: FromAccount,
  toAddress: `0x${string}`,
  amountInWei: string
) {
  try {
    const config = loadConfig();
    const accountClient = new AccountClient(
      {
        address: fromAccount.address,
        uniqueAccountId: fromAccount.uniqueAccountId,
      },
      fromAccount.info.rpId,
      config
    );

    const transaction: Transaction = {
      to: toAddress as string,
      value: amountInWei,
      from: fromAccount.address,
      input: undefined,
    };

    // sends tx and waits for the receipt automatically
    const response = await accountClient.sendTransaction(transaction as any);
    return response;
  } catch (err) {
    console.error("Error preparing transaction:", err);
  }
}
