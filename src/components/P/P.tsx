import React from 'react';
import {PProps} from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({size = 'xl', weight = 'thin', children, className, ...props}: PProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.l]: size === 'l',
                [styles.xl]: size === 'xl',
                [styles.xxl]: size === 'xxl',
                [styles.thin]: weight === 'thin',
                [styles.normal]: weight === 'normal',
                [styles.bold]: weight === 'bold'
            })
            }
            {...props}
        >
            {children}
        </p>
    );
};
