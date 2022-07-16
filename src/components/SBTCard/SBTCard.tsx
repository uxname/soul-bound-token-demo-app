import React from 'react';
import {SBTCardProps} from './SBTCard.props';
import styles from './SBTCard.module.scss';
import {AddressTag} from '../AddressTag/AddressTag';
import {P} from '../P/P';

export const SBTCard = ({image, address, ownerIcon, ownerAddress, ...props}: SBTCardProps): JSX.Element => {
    return (
        <div className={styles.sbt_card} {...props}>
            <div className={styles.top}>
                <AddressTag size="s" address={address}/>
            </div>
            <div className={styles.info}>
                <img src={image} alt=""/>
                <P size="m" weight="bold">Experienced Trader Level 5</P>
            </div>
            <div className={styles.bottom}>
                <div className={styles.owner}>
                    <img src={ownerIcon} alt=""/>
                    <P size="s" weight="bold">UniSwap</P>
                </div>
                <AddressTag size="s" address={ownerAddress}/>
            </div>
        </div>
    );
};
