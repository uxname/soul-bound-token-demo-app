export const collectionAbi = {
    'ABI version': 2,
    version: '2.2',
    header: ['pubkey', 'time', 'expire'],
    functions: [
        {
            name: 'constructor',
            inputs: [
                {name: 'codeNft', type: 'cell'},
                {name: 'ownerPubkey', type: 'uint256'},
                {name: 'json', type: 'string'},
                {name: 'name', type: 'string'},
                {name: 'schemaUri', type: 'string'}
            ],
            outputs: []
        },
        {
            name: 'mintNft',
            inputs: [
                {name: 'json', type: 'string'},
                {name: 'ownerSoul', type: 'address'}
            ],
            outputs: []
        },
        {
            name: 'setRemainOnNft',
            inputs: [
                {name: 'remainOnNft', type: 'uint128'}
            ],
            outputs: []
        },
        {
            name: 'owner',
            inputs: [
                {name: 'answerId', type: 'uint32'}
            ],
            outputs: [
                {name: 'pubkey', type: 'uint256'}
            ]
        },
        {
            name: 'transferOwnership',
            inputs: [
                {name: 'newOwner', type: 'uint256'}
            ],
            outputs: []
        },
        {
            name: 'getJson',
            inputs: [
                {name: 'answerId', type: 'uint32'}
            ],
            outputs: [
                {name: 'json', type: 'string'}
            ]
        },
        {
            name: 'totalSupply',
            inputs: [
                {name: 'answerId', type: 'uint32'}
            ],
            outputs: [
                {name: 'count', type: 'uint128'}
            ]
        },
        {
            name: 'nftCode',
            inputs: [
                {name: 'answerId', type: 'uint32'}
            ],
            outputs: [
                {name: 'code', type: 'cell'}
            ]
        },
        {
            name: 'nftCodeHash',
            inputs: [
                {name: 'answerId', type: 'uint32'}
            ],
            outputs: [
                {name: 'codeHash', type: 'uint256'}
            ]
        },
        {
            name: 'nftAddress',
            inputs: [
                {name: 'answerId', type: 'uint32'},
                {name: 'id', type: 'uint256'}
            ],
            outputs: [
                {name: 'nft', type: 'address'}
            ]
        },
        {
            name: 'supportsInterface',
            inputs: [
                {name: 'answerId', type: 'uint32'},
                {name: 'interfaceID', type: 'uint32'}
            ],
            outputs: [
                {name: 'value0', type: 'bool'}
            ]
        },
        {
            name: '_name',
            inputs: [],
            outputs: [
                {name: '_name', type: 'string'}
            ]
        },
        {
            name: '_schemaUri',
            inputs: [],
            outputs: [
                {name: '_schemaUri', type: 'string'}
            ]
        }
    ],
    data: [],
    events: [
        {
            name: 'OwnershipTransferred',
            inputs: [
                {name: 'oldOwner', type: 'uint256'},
                {name: 'newOwner', type: 'uint256'}
            ],
            outputs: []
        },
        {
            name: 'NftCreated',
            inputs: [
                {name: 'id', type: 'uint256'},
                {name: 'nft', type: 'address'},
                {name: 'owner', type: 'address'},
                {name: 'manager', type: 'address'},
                {name: 'creator', type: 'address'}
            ],
            outputs: []
        },
        {
            name: 'NftBurned',
            inputs: [
                {name: 'id', type: 'uint256'},
                {name: 'nft', type: 'address'},
                {name: 'owner', type: 'address'},
                {name: 'manager', type: 'address'}
            ],
            outputs: []
        }
    ],
    fields: [
        {name: '_pubkey', type: 'uint256'},
        {name: '_timestamp', type: 'uint64'},
        {name: '_constructorFlag', type: 'bool'},
        {name: '_supportedInterfaces', type: 'optional(cell)'},
        {name: '_codeNft', type: 'cell'},
        {name: '_totalSupply', type: 'uint128'},
        {name: '_json', type: 'string'},
        {name: '_owner', type: 'uint256'},
        {name: '_remainOnNft', type: 'uint128'},
        {name: '_name', type: 'string'},
        {name: '_schemaUri', type: 'string'}
    ]
} as const;
