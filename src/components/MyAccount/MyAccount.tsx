import React from 'react';
import {MyAccountProps} from './MyAccount.props';
import styles from './MyAccount.module.scss';
import {P} from '../P/P';
import OutIcon from '../../../public/assets/out_icon.svg';

export const MyAccount = ({children, ...props}: MyAccountProps): JSX.Element => {
    return (
        <div className={styles.account} {...props}>
            <P weight="bold">{children}</P>
            <OutIcon/>
        </div>
    );
};
