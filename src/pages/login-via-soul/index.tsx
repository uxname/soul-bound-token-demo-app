import React, {ReactNode, useState} from 'react';
import {Button, Input, ModalError, P} from '../../components';
import styles from './login-via-soul.module.scss';
import {_owners} from '../../utils/soulContractInteraction';
import {redirect, startAndEnd} from '../../utils/misc';
import {activateWallet} from '../../utils/activateWallet';
import {SOUL_ENTER_ADDRESS} from '../../constants/localStorage';


export default function LoginViaSoulPage(): ReactNode {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [modalText, setModalText] = useState<string>('');
    const [wallet, setWallet] = useState<string>('Connect EVER Wallet');
    const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

    async function checkSoul() {
        try {
            const res = await _owners((document.getElementById('soul_address_id') as HTMLInputElement)?.value.trim());
            localStorage.setItem(SOUL_ENTER_ADDRESS, (document.getElementById('soul_address_id') as HTMLInputElement)?.value.trim());
            console.log(res);
            if (typeof res === 'string') {
                setModalIsOpen(true);
                setModalText(res);
            } else if (res) {
                redirect('/dashboard');
            } else {
                setModalIsOpen(true);
                setModalText('Wrong contract address');
            }
        } catch (e) {
            setModalIsOpen(true);
            setModalText('Please enter right soul address');
        }
    }

    async function connectWallet() {
        const userWallet = await activateWallet();
        if (wallet === 'Please install EVER Wallet') {
            setWallet(userWallet);
        } else {
            setWallet(startAndEnd(userWallet, 10));
            setIsWalletConnected(true);
        }
    }

    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <P weight="bold">The Exchange</P>
                <Button onClick={() => connectWallet()}>{wallet}</Button>
            </div>
            <div className={styles.form}>
                <P size="xxl" weight="bold" style={{marginBottom: '22px'}}>Enter your Soul contract address.<br/>
                    Don’t have? Go here to create one.</P>
                <Input placeholder="Enter contract address" id={'soul_address_id'} disabled={!isWalletConnected}/>
                <Button appearance="purple" wide onClick={() => checkSoul()} disabled={!isWalletConnected}>Login via Soul</Button>
            </div>
            <ModalError modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} text={modalText}/>
        </div>
    );
}

