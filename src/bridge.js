import { CHAIN_PROVIDER } from './client.js';
import { hexToDigest, toBuffer } from './helper.js';

export const Bridge = {
    async getBalance() {
        return {
            coinType: '0x2::sui::SUI',
            coinObjectCount: 1,
            totalBalance: '2969647848',
            lockedBalance: {},
        };
    },

    async counterCreate() {
        let payload = {
            function: `${CHAIN_PROVIDER.sender}::counter::create`,
            type_arguments: [],
            arguments: [],
        };
        let hash = await CHAIN_PROVIDER.sendTx(payload);
        let res = await CHAIN_PROVIDER.checkTxResult(hash);
        let counter_type = `${CHAIN_PROVIDER.sender}::counter::Counter`;
        if (res.success) {
            const item = res.changes.filter(item => {
                return item.data?.type == counter_type;
            });
            if (item.length > 0) {
                return {
                    digest: hexToDigest(hash),
                    object_id: item[0].data.data.id.id.bytes,
                };
            } else {
                throw 'create counter not found';
            }
        } else {
            throw 'execute failed';
        }
    },

    async counterIncrement(object_id) {
        let payload = {
            function: `${CHAIN_PROVIDER.sender}::counter::create`,
            type_arguments: [],
            arguments: [toBuffer(object_id)],
        };
        let hash = await CHAIN_PROVIDER.sendTx(payload);
        let res = CHAIN_PROVIDER.checkTxResult(hash);
        if (!res.success) {
            throw 'execute failed';
        }
    },

    async getCounter(object_id) {
        let payload = {
            function: `${CHAIN_PROVIDER.sender}::counter::get_value`,
            type_arguments: [],
            arguments: [object_id],
        };
        let res = await CHAIN_PROVIDER.view(payload);
        return res[0];
    },
};
