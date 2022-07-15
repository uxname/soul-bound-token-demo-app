import React from 'react';
import {AddressTagProps} from './AddressTag.props';
import styles from './AddressTag.module.scss';
import cn from 'classnames';
import ArrowIcon from '../../../public/assets/arrow_purple.svg';

export const AddressTag = ({size = 'l', children, ...props}: AddressTagProps): JSX.Element => {
    return (
        <div className={cn(styles.address, {
            [styles.s]: size === 's',
            [styles.l]: size === 'l'
        })
        } {...props}>
            <span>
                {children}
            </span>
            <ArrowIcon className={styles.arrow}/>
        </div>
    );
};
