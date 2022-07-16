import React from 'react';
import {ButtonProps} from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({
    appearance = 'gradient',
    wide = false,
    children,
    className,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.gradient]: appearance === 'gradient',
                [styles.purple]: appearance === 'purple',
                [styles.wide]: wide === true
            })}
            {...props}
        >
            {children}
        </button>
    );
};
