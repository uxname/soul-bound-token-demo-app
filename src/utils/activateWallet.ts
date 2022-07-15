export const activateWallet = async (): Promise<string> => {
    const ever = await import('everscale-inpage-provider');
    const inpageProvider = new ever.ProviderRpcClient();
    await inpageProvider.disconnect();
    await inpageProvider.ensureInitialized();
    const {accountInteraction} = await inpageProvider.rawApi.requestPermissions({
        permissions: ['basic', 'accountInteraction']
    });
    if (accountInteraction) {
        return String(accountInteraction?.address);
    } else {
        return 'Please install EverWallet';
    }
};

