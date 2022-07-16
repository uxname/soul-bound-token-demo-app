import React from 'react';
import {SlideTabProps} from './SlideTab.props';
import styles from './SlideTab.module.scss';
import cn from 'classnames';
import {P} from '../P/P';
import {Htag} from '../Htag/Htag';

export const SlideTab = ({isOpen, ...props}: SlideTabProps): JSX.Element => {

    return (
        <div className={cn(styles.slide, {[styles.active]: !isOpen})} {...props}>
            <Htag color="white">Cross-Chain Master</Htag>
            <img src="/assets/sbt_img2.png" alt=""/>
            <P size="xl" weight="bold">This SBT is distributed by Octus Bridge to the most active users with transfered volume over 100.000 USDT. </P>
            <div className={styles.property_value}>
                <P size="m" weight="bold" style={{marginBottom: '10px'}}>Transferred value</P>
                <P size="xl" weight="bold">185.000 USDT</P>
            </div>
            <div className={styles.property_value}>
                <P size="m" weight="bold" style={{marginBottom: '10px'}}>Distribution date</P>
                <P size="xl" weight="bold">15 Nov 2021</P>
            </div>
        </div>
    );
};
