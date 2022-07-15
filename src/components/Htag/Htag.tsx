import React from 'react';
import {HtagProps} from './Htag.props';
import styles from './Htag.module.css';
import cn from 'classnames';

export const Htag = ({color = 'black', children, ...props}: HtagProps): JSX.Element => {
    return (
        <p className={cn(styles.h1, {
            [styles.white]: color === 'white',
            [styles.black]: color === 'black'
        })
        } {...props}>{children}</p>
    );
};
