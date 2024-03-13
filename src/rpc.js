import { RpcImpl } from './rpc_impl.js';

export const rpc = {
    suix_getAllBalances: RpcImpl.getAllBalances,
    suix_getBalance: RpcImpl.getBalance,
    sui_getObject: RpcImpl.getObject,
    sui_dryRunTransactionBlock: RpcImpl.getObject,
    sui_executeTransactionBlock: RpcImpl.getObject,
    suix_getCoins: RpcImpl.getObject,
    sui_multiGetObjects: RpcImpl.getObject,
    sui_getNormalizedMoveFunction: RpcImpl.getObject,
    suix_getReferenceGasPrice: RpcImpl.getObject,
    sui_getProtocolConfig: RpcImpl.getObject,
};
