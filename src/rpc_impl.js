export const RpcImpl = {
    feeHistory: async function (args) {
        return {
            baseFeePerGas: '0x0',
            gasUsedRatio: '0x0',
            maxFeePerGas: '0x0',
            maxPriorityFeePerGas: '0x0',
            targetGasUsed: '0x0',
        };
    },
};
