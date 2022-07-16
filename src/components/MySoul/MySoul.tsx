import React from 'react';
import {MySoulProps} from './MySoul.props';
import styles from './MySoul.module.scss';
import {P} from '../P/P';
import {AddressTag} from '../AddressTag/AddressTag';

export const MySoul = ({...props}: MySoulProps): JSX.Element => {
    return (
        <div className={styles.my_soul} {...props}>
            <div className={styles.header}>
                <P weight="bold">Your soul</P>
            </div>
            <div className={styles.line}>
                <P size="s" weight="bold">Contract</P>
                <AddressTag size="s" address="0:62dsfgte3342gdgerg6345v2ui5n2b593343"/>
            </div>
            <div className={styles.line}>
                <P size="s" weight="bold">Public key</P>
                <P size="s" weight="bold">0:b601...a1cd</P>
            </div>
        </div>
    );
};
