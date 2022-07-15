import React, {ReactNode, useState} from 'react';
import {AddressTag, Htag, P, SBTCard, AddCard, MyAccount, MySoul, PremiumTrader, Button} from '../../components';
import styles from './exchange.module.scss';
import {activateWallet} from '../../utils/activateWallet';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default function ExchangePage(): ReactNode {

    const [wallet, setWallet] = useState<string>('Connect wallet');
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const connectWallet = async () => {
        const connectWalletData = await activateWallet();
        setWallet(connectWalletData);
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
                    <SBTCard image="/assets/sbt_img.png" address="0:b601...a1cd" ownerIcon="/assets/owner_icon.png" ownerAddress="0:b601...blabla"/>
                    <SBTCard image="/assets/sbt_img.png" address="0:b601...a1cd" ownerIcon="/assets/owner_icon.png" ownerAddress="0:b601...blabla"/>
                    <SBTCard image="/assets/sbt_img.png" address="0:b601...a1cd" ownerIcon="/assets/owner_icon.png" ownerAddress="0:b601...blabla"/>
                    <AddCard onClick={() => openModal()}/>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        style={customStyles}
                    >
                        <P size="xxl" weight="bold">Enter your SBT token address</P>
                        <Button appearance="primary">sss</Button>
                    </Modal>
                </div>
            </div>
            <div className={styles.sidebar}>
                <MyAccount>0:b601...e0dchfghfffgd</MyAccount>
                <MySoul/>
                <PremiumTrader/>
                <button onClick={() => connectWallet()}>{wallet}</button>
            </div>
            <div className={styles.sbt_info_side}>
                <Htag color="white">Cross-Chain Master</Htag>
            </div>
        </div>
    );
}

