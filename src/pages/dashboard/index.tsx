import React, {ReactNode, useEffect, useState} from 'react';
import {
    AddressTag,
    Htag,
    P,
    SBTCard,
    AddCard,
    MyAccount,
    MySoul,
    PremiumTrader,
    Button,
    Input,
    SlideTab
} from '../../components';
import styles from './dashboard.module.scss';
import {getInfoNft, getJsonDataNft} from '../../utils/nftContractInteraction';
import {collAddress} from '../../utils/addresses';
import Modal from 'react-modal';
import Link from 'next/link';

interface INftData {
    address: string,
    image: string,
    creator_name: string,
    name: string,
    description: string,
    attributes: IAttributes[]
}

interface IAttributes {
    key: string,
    value: string
}

export default function DashboardPage(): ReactNode {

    const [address, setAddress] = useState<string>('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [slideIsOpen, setSlideIsOpen] = useState(false);
    const [inputNftError, setInputNftError] = useState(false);
    const [nftsArray, setNftsArray] = useState<Array<INftData>>([]);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const areSoulsIdentical = async (useNftAddress: string) => {
        try {
            const adr = await getInfoNft(useNftAddress);
            if (adr === collAddress) {
                const nftData = JSON.parse(await getJsonDataNft(useNftAddress));
                const arr = nftsArray;
                // eslint-disable-next-line camelcase
                const params: INftData = {address: useNftAddress, image: nftData.image, creator_name: nftData.creator_name, name: nftData.name, description: nftData.description, attributes: nftData.attributes};
                arr.push(params);
                setNftsArray(arr);
                closeModal();
            } else {
                setInputNftError(true);
            }
        } catch (e) {
            setInputNftError(true);
        }
    };

    useEffect(() => {
        (async () => {
            const ever = await import('everscale-inpage-provider');
            const inpageProvider = new ever.ProviderRpcClient();
            if (!(await inpageProvider.hasProvider())) {
                return 'Please install EverWallet';
            } else {
                const {accountInteraction} = await inpageProvider.rawApi.requestPermissions({
                    permissions: ['basic', 'accountInteraction']
                });
                setAddress((String(accountInteraction?.publicKey)));
                return accountInteraction?.publicKey;
            }
        })();
    }, []);

    const [selectedNft, setSelectedNft] = useState<INftData>();
    return (
        <div className={styles.layout}>
            <div className={styles.body}>
                <P style={{marginBottom: '30px'}}>MyAwesomeExchange</P>
                <Htag style={{marginBottom: '15px'}}>Share your SBTs to onboard</Htag>
                <P>Import the following SBTs to upgrade your trader profile:</P>
                <ul className={styles.list}>
                    <li><span>Experienced Trader Level 5</span> by Uniswap <Link href={`https://net.ever.live/accounts/accountDetails?id=${collAddress}`}><a target={'_blank'} style={{textDecoration: 'none'}}><AddressTag address={collAddress}/></a></Link></li>
                    <li><span>Cross-Chain Master</span> by Octus Bridge <Link href={`https://net.ever.live/accounts/accountDetails?id=${collAddress}`}><a target={'_blank'} style={{textDecoration: 'none'}}><AddressTag address={collAddress}/></a></Link></li>
                    <li><span>Premium Club Member</span> by GrandBazar.io <Link href={`https://net.ever.live/accounts/accountDetails?id=${collAddress}`}><a target={'_blank'} style={{textDecoration: 'none'}}><AddressTag address={collAddress}/></a></Link></li>
                </ul>
                <div className={styles.sbts}>
                    {nftsArray.map((nft, index) => {
                        return <div key={index}>
                            <SBTCard onClick={() => {
                                setSlideIsOpen(!slideIsOpen);
                                setSelectedNft(nft);
                            }} image={nft.image} name={nft.name} creator_name={nft.creator_name} address={nft.address} ownerIcon="/assets/owner_icon.png" ownerAddress={collAddress}/>
                        </div>;
                    })}
                    <SlideTab isOpen={slideIsOpen} data={selectedNft}/>
                    <AddCard onClick={() => openModal()}/>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        style={{
                            content: {
                                width: '800px',
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                padding: '30px 45px 60px',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)',
                                borderRadius: '15px'
                            },
                            overlay: {
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(178.99deg, rgba(173, 119, 184, 0.28) 1.38%, rgba(155, 151, 206, 0.51) 99.13%, rgba(155, 151, 206, 0.29) 99.13%)',
                                backdropFilter: 'blur(25px)'
                            }
                        }}
                    >
                        <P size="xxl" weight="bold" style={{textAlign: 'center'}}>Enter your SBT token address</P>
                        <div style={{display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', gap: '30px', marginTop: '30px'}}>
                            <Input error={inputNftError} errorText="Error. This SBT is not related to your Soul." id={'nft_address_id'}/>
                            <Button appearance="purple" onClick={() => areSoulsIdentical((document.getElementById('nft_address_id') as HTMLInputElement)?.value.trim())}>Import</Button>
                        </div>
                    </Modal>
                </div>
            </div>
            <div className={styles.sidebar}>
                <MyAccount address={address}/>
                <MySoul/>
                {nftsArray.length === 3
                    ? <PremiumTrader/>
                    : <></>
                }
            </div>
        </div>
    );
}

