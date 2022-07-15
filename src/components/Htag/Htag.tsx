import React from 'react';
import {HtagProps} from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({children, ...props}: HtagProps): JSX.Element => {
    return (
        <h1 className={styles.h1} {...props}>{children}</h1>
    );
};
