import { loadConfig } from "@/components/helpers/loadConfig";
import { Transaction, type RpId } from "react-native-zksync-sso";
import { AccountClient } from "./authenticate/account_client";

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

    // TODO: try out interacting with a contract
    const transaction: Transaction = {
      to: toAddress as string,
      value: amountInWei,
      from: fromAccount.address,
      input: undefined,
    };

    // sends and waits for the receipt automatically
    // await accountClient.sendTransaction(transaction as any);
    // this doesn't sign, just adds gas and other fields
    const prepared = await accountClient.prepareTransaction(transaction as any);
    return prepared;
  } catch (err) {
    console.error("Error preparing transaction:", err);
  }
}
