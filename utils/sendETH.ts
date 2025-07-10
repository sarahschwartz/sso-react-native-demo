// import { loadConfig } from "@/components/helpers/loadConfig";
// import sdk, { type RpId } from "react-native-zksync-sso";

// interface FromAccount {
//         info: {
//             rpId: RpId;
//             name?: string;
//             userID?: string;
//         };
//         address: string;
//         uniqueAccountId: string;
//     };

// export async function sendETH(fromAccount: FromAccount, toAddress: `0x${string}`, amountInWei: bigint) {
//      try {
//             const config = loadConfig();
//             const accountClient = new sdk.authenticate.AccountClient(
//                 {
//                     address: fromAccount.address,
//                     uniqueAccountId: fromAccount.uniqueAccountId
//                 },
//                 fromAccount.info.rpId,
//                 config
//             );
//             const transaction: Transaction = {
//                 to: toAddress as string,
//                 value: amountInWei,
//                 from: fromAccount.address,
//                 input: undefined
//             };
//             const prepared = await accountClient.prepareTransaction(transaction as any);
//             console.log("Prepared transaction:", prepared);
//         } catch (err) {
//             console.error("Error preparing transaction:", err);
//         }
// }