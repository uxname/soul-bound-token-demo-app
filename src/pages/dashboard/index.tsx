import React, {ReactNode, useState} from 'react';
import {AddressTag, Htag, P, SBTCard, AddCard, MyAccount, MySoul, PremiumTrader, Button, Input, SlideTab} from '../../components';
import styles from './dashboard.module.scss';
import {activateWallet} from '../../utils/activateWallet';
import Modal from 'react-modal';
import {_owners} from '../../utils/soulContractInteraction';
import {getInfoNft, getJsonDataNft} from '../../utils/nftContractInteraction';
import {collAddress} from '../../utils/addresses';


export default function DashboardPage(): ReactNode {

    const [wallet, setWallet] = useState<string>('Connect wallet');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [slideIsOpen, setSlideIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function openSlide() {
        setSlideIsOpen(true);
    }

    function closeSlide() {
        setSlideIsOpen(false);
    }

    const connectWallet = async () => {
        const connectWalletData = await activateWallet();
        setWallet(connectWalletData);
    };

    const areSoulsIdentical = (useNaftAddress: string) => {
        console.log(collAddress);
        console.log(useNaftAddress);
        console.log(useNaftAddress === collAddress);
        return useNaftAddress === collAddress;
    };

    return (
        <div className={styles.layout}>
            <div className={styles.body}>
                <P style={{marginBottom: '30px'}}>MyAwesomeExchange</P>
                <Htag style={{marginBottom: '15px'}}>Share your SBTs to onboard</Htag>
                <P>Import the following SBTs to upgrade your trader profile:</P>
                <ul className={styles.list}>
                    <li><span>Experienced Trader Level 5</span> by Uniswap <AddressTag>0:b601...a1cd</AddressTag></li>
                    <li><span>Cross-Chain Master</span> by Octus Bridge <AddressTag>0:b601...a1cd</AddressTag></li>
                    <li><span>Premium Club Member</span> by GrandBazar.io <AddressTag>0:b601...a1cd</AddressTag></li>
                </ul>
                <div className={styles.sbts}>
                    <SBTCard onClick={() => setSlideIsOpen(!slideIsOpen)} image="/assets/sbt_img.png" address="0:b601...a1cd" ownerIcon="/assets/owner_icon.png" ownerAddress="0:b601...blabla"/>
                    <SBTCard onClick={() => setSlideIsOpen(!slideIsOpen)} image="/assets/sbt_img.png" address="0:b601...a1cd" ownerIcon="/assets/owner_icon.png" ownerAddress="0:b601...blabla"/>
                    <SBTCard onClick={() => setSlideIsOpen(!slideIsOpen)} image="/assets/sbt_img.png" address="0:b601...a1cd" ownerIcon="/assets/owner_icon.png" ownerAddress="0:b601...blabla"/>
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
                                padding: '30px 45px 50px',
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
                        <div style={{display: 'flex', gap: '30px', marginTop: '30px'}}>
                            <Input/>
                            <Button appearance="purple">sss</Button>
                        </div>
                    </Modal>
                </div>
            </div>
            <div className={styles.sidebar}>
                <MyAccount>0:b601...e0dchfghfffgd</MyAccount>
                <MySoul/>
                <PremiumTrader/>
                <button onClick={() => connectWallet()}>{wallet}</button>
                <input id={'soul_address_id'} placeholder={'soul contract address'}/>
                <button onClick={() => _owners((document.getElementById('soul_address_id') as HTMLInputElement)?.value.trim())}>Owner</button>
                <input id={'nft_address_id'} placeholder={'nft contract address'}/>
                <button onClick={() => getInfoNft((document.getElementById('nft_address_id') as HTMLInputElement)?.value.trim())}>getInfoNft</button>
                <button onClick={async () => areSoulsIdentical(await getInfoNft((document.getElementById('nft_address_id') as HTMLInputElement)?.value.trim()))}>Check valid soul</button>
                <button onClick={async () => getJsonDataNft((document.getElementById('nft_address_id') as HTMLInputElement)?.value.trim())}>Get nft data</button>
            </div>
            <SlideTab isOpen={slideIsOpen}/>
        </div>
    );
}

