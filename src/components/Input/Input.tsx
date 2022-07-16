import React from 'react';
import {InputProps} from './Input.props';
import styles from './Input.module.scss';
import cn from 'classnames';

export const Input = ({placeholder, error = true, errorText, ...props}: InputProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <input type="text" className={cn(styles.input, {[styles.error]: error === true})}
                placeholder={placeholder} {...props} />
            {error ? <span>{errorText}</span> : <></>}
        </div>
    );
};
