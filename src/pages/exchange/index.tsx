import React, {ReactNode} from 'react';
import {Button, Htag, P} from '../../components';
import styles from './exchange.module.scss';


export default function ExchangePage(): ReactNode {

    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <P weight="bold">The Exchange</P>
                <Button>Connect EVER Wallet</Button>
            </div>
            <div className={styles.body1}>
                <Htag>Onboard with Identix.SBT</Htag>
                <P size="xxl" weight="bold">Build Your Web3 Identity and onboard easily<br/>with Soulbound tokens</P>
            </div>
            <div className={styles.body2}>
                <img src="/assets/Card1.png" alt=""/>
                <img src="/assets/Card2.png" alt=""/>
                <img src="/assets/Card3.png" alt=""/>
            </div>
        </div>
    );
}

