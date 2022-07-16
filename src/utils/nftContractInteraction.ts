import {nftAbi} from './abis/Nft.abi';

export const getInfoNft = async (nftAddress: string) => {
    const ever = await import('everscale-inpage-provider');
    const inpageProvider = new ever.ProviderRpcClient();
    if (!(await inpageProvider.hasProvider())) {
        return 'Please install EverWallet';
    } else {
        const nftAddr = new ever.Address(nftAddress);

        const soul = new inpageProvider.Contract(nftAbi, nftAddr);

        const nftData = await soul.methods.getInfo({
            answerId: 0
        }).call();

        // eslint-disable-next-line dot-notation
        console.log(nftData.collection['_address']);
        // eslint-disable-next-line dot-notation
        return nftData.collection['_address'];
    }
};

export const getJsonDataNft = async (nftAddress: string) => {
    const ever = await import('everscale-inpage-provider');
    const inpageProvider = new ever.ProviderRpcClient();
    if (!(await inpageProvider.hasProvider())) {
        return 'Please install EverWallet';
    } else {
        const nftAddr = new ever.Address(nftAddress);

        const soul = new inpageProvider.Contract(nftAbi, nftAddr);

        const nftData = await soul.methods.getJson({
            answerId: 0
        }).call();

        // eslint-disable-next-line dot-notation
        console.log(nftData.json);
        // eslint-disable-next-line dot-notation
        return nftData.json;
    }
};
