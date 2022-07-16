import React from 'react';
import {SBTCardProps} from './SBTCard.props';
import styles from './SBTCard.module.scss';
import {AddressTag} from '../AddressTag/AddressTag';
import {P} from '../P/P';
import Link from 'next/link';

// eslint-disable-next-line camelcase
export const SBTCard = ({image, address, ownerIcon, ownerAddress, name, creator_name, ...props}: SBTCardProps): JSX.Element => {
    return (
        <div className={styles.sbt_card} {...props}>
            <div className={styles.top}>
                <Link href={`https://net.ever.live/accounts/accountDetails?id=${address}`}><a target={'_blank'} style={{textDecoration: 'none'}}>
                    <AddressTag size="s" address={address}/>
                </a></Link>
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
                <Link href={`https://net.ever.live/accounts/accountDetails?id=${ownerAddress}`}><a target={'_blank'} style={{textDecoration: 'none'}}>
                    <AddressTag size="s" address={ownerAddress}/>
                </a></Link>
            </div>
        </div>
    );
};
