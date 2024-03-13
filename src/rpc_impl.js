export const RpcImpl = {
    getAllBalances: async function (args) {
        let owner = args[0];
        console.log('-sui address---', owner);
        return [
            {
                coinType: '0x2::sui::SUI',
                coinObjectCount: 1,
                totalBalance: '1969647848',
                lockedBalance: {},
            },
        ];
    },
    getBalance: async function (args) {
        const owner = args[0];
        const coin_type = args[1];
        console.log('-sui address---', owner, coin_type);
        return {
            coinType: '0x2::sui::SUI',
            coinObjectCount: 1,
            totalBalance: '1969647848',
            lockedBalance: {},
        };
    },
    getObject: async function (args) {
        const objectId = args[0];
        const option = args[1];
        // showBcs?: boolean;
        // /**
        //  * Whether to show the content(i.e., package content or Move struct content) of the object. Default to
        //  * be False
        //  */
        // showContent?: boolean;
        // /** Whether to show the Display metadata of the object for frontend rendering. Default to be False */
        // showDisplay?: boolean;
        // /** Whether to show the owner of the object. Default to be False */
        // showOwner?: boolean;
        // /** Whether to show the previous transaction digest of the object. Default to be False */
        // showPreviousTransaction?: boolean;
        // /** Whether to show the storage rebate of the object. Default to be False */
        // showStorageRebate?: boolean;
        // /** Whether to show the type of the object. Default to be False */
        // showType?: boolean;

        return {
            data: {
                objectId: '0x8791509916de7f5636754df6b1070939e1eec2d467a2daf3699a7943462fd1bb',
                version: '927557',
                digest: '8TvCXSRqPgT5GgSttj7fNdWuyiaNSJi6cbu6ps9dFQAh',
                content: {
                    dataType: 'moveObject',
                    type: '0x71f535f90178abd36f6e9dcf869c92846cb5ef3c4c2b9e159fa7949aa1f1be5d::counter::Counter',
                    hasPublicTransfer: false,
                    fields: {
                        id: {
                            id: '0x8791509916de7f5636754df6b1070939e1eec2d467a2daf3699a7943462fd1bb',
                        },
                        owner: '0x642957aef4075311bf8fe83da40a1acb527b1ba7e87fe55647c2ebc65003cefb',
                        value: '0',
                    },
                },
            },
        };
    },
};
