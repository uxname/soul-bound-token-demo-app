import React, {ReactNode, useState} from 'react';
import {AddressTag, Htag, P, SBTCard, AddCard} from '../../components';
import styles from './exchange.module.scss';
import {activateWallet} from '../../utils/activateWallet';

export default function ExchangePage(): ReactNode {

    const [wallet, setWallet] = useState<string>('Connect wallet');

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
                    <AddCard/>
                </div>
            </div>
            <div className={styles.sidebar}>
                <p>Sidebar</p>
                <button onClick={() => connectWallet()}>{wallet}</button>
            </div>
        </div>
    );
}

