import React from 'react';
import {SlideTabProps} from './SlideTab.props';
import styles from './SlideTab.module.scss';
import cn from 'classnames';
import {P} from '../P/P';
import {Htag} from '../Htag/Htag';

export const SlideTab = ({isOpen, data, ...props}: SlideTabProps): JSX.Element => {

    console.log({data});
    return (
        <div className={cn(styles.slide, {[styles.active]: !isOpen})} {...props}>
            <Htag color="white">{data.name}</Htag>
            <img src={data.image} alt="" width={'450vw'}/>
            <P size="xl" weight="bold">{data.description}</P>
            <div className={styles.property_value}>
                <P size="m" weight="bold" style={{marginBottom: '10px'}}>{data.attributes[0].key}</P>
                <P size="xl" weight="bold">{data.attributes[0].value}</P>
            </div>
            <div className={styles.property_value}>
                <P size="m" weight="bold" style={{marginBottom: '10px'}}>{data.attributes[1].key}</P>
                <P size="xl" weight="bold">{data.attributes[1].value}</P>
            </div>
        </div>
    );
};
