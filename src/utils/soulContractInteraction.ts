import {soulAbi} from './abis/Soul.abi';

// export const soulAddress = '0:b3597358c5b875ec73e631ab72b75fa9a65654a011ed84e5f712f6c1f1b77cf6';

export const _owners = async (soulAddress: string) => {
    const ever = await import('everscale-inpage-provider');
    const inpageProvider = new ever.ProviderRpcClient();
    if (!(await inpageProvider.hasProvider())) {
        return 'Please install EverWallet';
    } else {
        const {accountInteraction} = await inpageProvider.rawApi.requestPermissions({
            permissions: ['basic', 'accountInteraction']
        });
        const pubKey = accountInteraction?.publicKey;
        const soulAddr = new ever.Address(soulAddress);

        const soul = new inpageProvider.Contract(soulAbi, soulAddr);

        const owner = await soul.methods._owners({}).call();
        console.log(owner._owners[0][0].slice(2));
        return owner._owners[0][0].slice(2) === pubKey;
    }
};


