import React from 'react';
import {PremiumTraderProps} from './PremiumTrader.props';
import styles from './PremiumTrader.module.scss';
import {P} from '../P/P';

export const PremiumTrader = ({...props}: PremiumTraderProps): JSX.Element => {
    return (
        <div className={styles.premium_trader} {...props}>
            <P size="m" weight="bold">Your have been upgraded to Premium Trader!</P>
            <img src="/assets/check.svg" alt=""/>
        </div>
    );
};
