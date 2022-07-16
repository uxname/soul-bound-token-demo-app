import React, {ReactNode} from 'react';
import {Button, MyAccount, P} from '../../components';
import styles from './connect-wallet.module.scss';
// import CopyIcon from '../../../public/assets/copy_icon.svg';


export default function ConnectWalletPage(): ReactNode {

    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <P weight="bold">The Exchange</P>
                <MyAccount address="0:b601afa5fas76f4sa68as90as9s7ae0dchfghfffgd"/>
            </div>
            <div className={styles.body1}>
                <div className={styles.connect}>
                    <p className={styles.title}>Identix.SBT</p>
                    <P size="xxl" weight="bold">Connect your wallet to create an<br/>Identix.SBT Soul.</P>
                </div>
            </div>
            {/*<div className={styles.body2}>*/}
            {/*    <div className={styles.form}>*/}
            {/*        <P size="xxl" weight="bold" style={{marginBottom: '22px', textAlign: 'center'}}>Your public key that will be used to create a Soul.</P>*/}
            {/*        <P size="xl" weight="bold" style={{wordBreak: 'break-all'}}>e73cefdc839b7b6ffcb5325d4f0ad8995089924563ed2573036df5877ff1148e</P>*/}
            {/*        <Button wide>Create a soul contract</Button>*/}
            {/*    </div>*/}
            {/*    <div className={styles.congrats}>*/}
            {/*        <P size="xxl" weight="bold" style={{marginBottom: '10px'}}>Congrats! Your Soul contract has been created.</P>*/}
            {/*        <P size="xl" weight="bold" style={{wordBreak: 'break-all', marginBottom: '10px'}}>Use the address below when you asked to share your SBT profile</P>*/}
            {/*        <span className={styles.contract_link}>0:b60107b56215dca1cfaaf7cfb486cc49c2655aa28a181b0e9dbab0dcb78ea1cd<CopyIcon onClick={() => {*/}
            {/*            navigator.clipboard.writeText('0:b60107b56215dca1cfaaf7cfb486cc49c2655aa28a181b0e9dbab0dcb78ea1cd');*/}
            {/*        }}/></span>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

