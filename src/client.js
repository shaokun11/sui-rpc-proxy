import { AptosClient, AptosAccount } from 'aptos-sui';
import { NODE_URL, SENDER_KEY } from './const.js';
const client = new AptosClient(NODE_URL);

const SENDER_ACCOUNT = AptosAccount.fromAptosAccountObject({
    privateKeyHex: SENDER_KEY,
});

export const SENDER_ADDRESS = SENDER_ACCOUNT.address().hexString;
console.log('SENDER_ADDRESS:', SENDER_ADDRESS);
export const CHAIN_PROVIDER = {
    sender: SENDER_ADDRESS,
    async sendTx(payload) {
        const txnRequest = await client.generateTransaction(SENDER_ADDRESS, payload);
        const signedTxn = await client.signTransaction(SENDER_ACCOUNT, txnRequest);
        const transactionRes = await client.submitTransaction(signedTxn);
        await client.waitForTransaction(transactionRes.hash);
        return transactionRes.hash;
    },
    async checkTxResult(tx) {
        return client.getTransactionByHash(tx);
    },

    async view(payload) {
        return client.view(payload);
    },
};
