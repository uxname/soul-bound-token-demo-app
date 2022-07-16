import React from 'react';
import {MyAccountProps} from './MyAccount.props';
import styles from './MyAccount.module.scss';
import {P} from '../P/P';
import OutIcon from '../../../public/assets/out_icon.svg';
import Link from 'next/link';

function startAndEnd(str: string) {
    const lngth = 30;
    const gapMin = 0;
    const gapMax1 = 6;
    const gapMax2 = 13;
    if (str && str.length > lngth) {
        return `${str.substr(gapMin, gapMax1)}...${str.substr(str.length - gapMax2, str.length)}`;
    }
    return str;
}

export const MyAccount = ({address, ...props}: MyAccountProps): JSX.Element => {
    return (
        <div className={styles.account} {...props}>
            <P size="m" weight="bold">{startAndEnd(address)}</P>
            <Link href={'/login-via-soul'}>
                <OutIcon/>
            </Link>
        </div>
    );
};
