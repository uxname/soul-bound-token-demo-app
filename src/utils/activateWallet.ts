export const activateWallet = async (): Promise<string> => {
    const ever = await import('everscale-inpage-provider');
    const inpageProvider = new ever.ProviderRpcClient();
    if (!(await inpageProvider.hasProvider())) {
        return 'Please install EverWallet';
    } else {
        await inpageProvider.disconnect();
        await inpageProvider.ensureInitialized();
        const {accountInteraction} = await inpageProvider.rawApi.requestPermissions({
            permissions: ['basic', 'accountInteraction']
        });
        return String(accountInteraction?.address);
    }
};

