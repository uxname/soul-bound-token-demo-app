import React, {ReactNode} from 'react';
import {Button, P, Input} from '../../components';
import styles from './create-soul.module.scss';


export default function CreateSoulPage(): ReactNode {

    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <P weight="bold">Identix.SBT | Issuer</P>
                <Button>Connect Ever Wallet</Button>
            </div>
            <div className={styles.form}>
                <div className={styles.input_block}>
                    <P size="xxl" weight="bold">Target soul contract</P>
                    <Input/>
                </div>
                <div className={styles.input_block}>
                    <P size="xxl" weight="bold">SBT collection URI</P>
                    <Input/>
                </div>
                <img src="/assets/line.svg" alt=""/>
                <div style={{display: 'flex', justifyContent: 'flex-start', gap: '100px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                        <div className={styles.input_block}>
                            <P size="xxl" weight="bold">SBT Name</P>
                            <Input/>
                        </div>
                        <div className={styles.input_block}>
                            <P size="xxl" weight="bold">SBT Description</P>
                            <Input/>
                        </div>
                    </div>
                    <div className={styles.input_block}>
                        <P size="xxl" weight="bold">SBT Image</P>
                        <div className={styles.input_image}>
                            <label htmlFor="upload-photo">Click to upload image<span>jpg / png</span></label>
                            <input type="file" name="photo" id="upload-photo"/>
                        </div>
                    </div>
                </div>
                <div className={styles.input_block}>
                    <P size="xxl" weight="bold">Additional property</P>
                    <div style={{display: 'flex', justifyContent: 'space-between', gap: '40px'}}>
                        <div className={styles.property_value}>
                            <P size="m" weight="bold" style={{marginBottom: '10px'}}>Property name</P>
                            <P size="xl" weight="bold">zfgzxgxgxvbxf zdvzg d </P>
                        </div>
                        <div className={styles.property_value}>
                            <P size="m" weight="bold" style={{marginBottom: '10px'}}>Property name</P>
                            <P size="xl" weight="bold">zfgzxgxgxvbxf zdvzg d </P>
                        </div>
                    </div>
                </div>
                <Button appearance="purple" style={{margin: '30px auto'}}>Create</Button>
            </div>
        </div>
    );
}

