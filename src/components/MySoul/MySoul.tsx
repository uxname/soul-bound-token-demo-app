import React, {useEffect, useState} from 'react';
import {MySoulProps} from './MySoul.props';
import styles from './MySoul.module.scss';
import {P} from '../P/P';
import {AddressTag} from '../AddressTag/AddressTag';
import {startAndEnd} from '../../utils/misc';
import {SOUL_ENTER_ADDRESS} from '../../constants/localStorage';

export const MySoul = ({...props}: MySoulProps): JSX.Element => {

    const [pubKey, setPubKey] = useState<string>();
    const [soul, setSoul] = useState<string>('');

    useEffect(() => {
        (async () => {
            setSoul(String(localStorage.getItem(SOUL_ENTER_ADDRESS)));
            const ever = await import('everscale-inpage-provider');
            const inpageProvider = new ever.ProviderRpcClient();
            if (!(await inpageProvider.hasProvider())) {
                return 'Please install EverWallet';
            } else {
                const {accountInteraction} = await inpageProvider.rawApi.requestPermissions({
                    permissions: ['basic', 'accountInteraction']
                });
                setPubKey(startAndEnd(String(accountInteraction?.publicKey), 5));
                return accountInteraction?.publicKey;
            }
        })();
    }, []);


    return (
        <div className={styles.my_soul} {...props}>
            <div className={styles.header}>
                <P weight="bold">Your soul</P>
            </div>
            <div className={styles.line}>
                <P size="s" weight="bold">Contract</P>
                <AddressTag size="s" address={soul}/>
            </div>
            <div className={styles.line}>
                <P size="s" weight="bold">Public key</P>
                <P size="s" weight="bold">{pubKey}</P>
            </div>
        </div>
    );
};
