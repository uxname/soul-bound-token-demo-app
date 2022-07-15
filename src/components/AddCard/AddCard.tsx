import React from 'react';
import {AddCardProps} from './AddCard.props';
import styles from './AddCard.module.scss';

export const AddCard = ({...props}: AddCardProps): JSX.Element => {
    return (
        <div className={styles.add_card} {...props}>
            <span>+</span>
        </div>
    );
};
