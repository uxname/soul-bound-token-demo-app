import React from 'react';
import {SBTCardProps} from './SBTCard.props';
import styles from './SBTCard.module.scss';
import {AddressTag} from '../AddressTag/AddressTag';
import {P} from '../P/P';

// eslint-disable-next-line camelcase
export const SBTCard = ({image, address, ownerIcon, ownerAddress, name, creator_name, ...props}: SBTCardProps): JSX.Element => {
    return (
        <div className={styles.sbt_card} {...props}>
            <div className={styles.top}>
                <AddressTag size="s" address={address}/>
            </div>
            <div className={styles.info}>
                <img src={image} alt=""/>
                <P size="m" weight="bold">{name}</P>
            </div>
            <div className={styles.bottom}>
                <div className={styles.owner}>
                    <img src={ownerIcon} alt=""/>
                    {/* eslint-disable-next-line camelcase */}
                    <P size="s" weight="bold">{creator_name}</P>
                </div>
                <AddressTag size="s" address={ownerAddress}/>
            </div>
        </div>
    );
};
