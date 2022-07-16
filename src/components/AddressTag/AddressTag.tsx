import React from 'react';
import {AddressTagProps} from './AddressTag.props';
import styles from './AddressTag.module.scss';
import cn from 'classnames';
import ArrowIcon from '../../../public/assets/arrow_purple.svg';

function startAndEnd(str: string) {
    const lngth = 30;
    const gapMin = 0;
    const gapMax1 = 6;
    const gapMax2 = 4;
    if (str && str.length > lngth) {
        return `${str.substr(gapMin, gapMax1)}...${str.substr(str.length - gapMax2, str.length)}`;
    }
    return str;
}

export const AddressTag = ({size = 'l', address, ...props}: AddressTagProps): JSX.Element => {
    return (
        <div className={cn(styles.address, {
            [styles.s]: size === 's',
            [styles.l]: size === 'l'
        })
        } {...props}>
            <span>
                {startAndEnd(address)}
            </span>
            <ArrowIcon className={styles.arrow}/>
        </div>
    );
};
