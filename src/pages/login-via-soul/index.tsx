import React, {ReactNode} from 'react';
import {Button, Input, P} from '../../components';
import styles from './login-via-soul.module.scss';


export default function LoginViaSoulPage(): ReactNode {

    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <P weight="bold">The Exchange</P>
                <Button>Connect EVER Wallet</Button>
            </div>
            <div className={styles.form}>
                <P size="xxl" weight="bold" style={{marginBottom: '22px'}}>Enter your Soul contract address.<br/>
                    Don’t have? Go here to create one.</P>
                <Input placeholder="Enter contract address"/>
                <Button appearance="purple" wide>Login via Soul</Button>
            </div>
        </div>
    );
}

