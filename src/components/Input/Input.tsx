import React from 'react';
import {InputProps} from './Input.props';
import styles from './Input.module.scss';

export const Input = ({placeholder, ...props}: InputProps): JSX.Element => {
    return (
        <input type="text" className={styles.input} placeholder={placeholder} {...props} />
    );
};
