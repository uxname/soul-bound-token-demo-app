import React from 'react';
import Modal from 'react-modal';
import {ModalErrorProps} from './ModalError.props';
import {P} from '../P/P';

export const ModalError = ({modalIsOpen, closeModal, text}: ModalErrorProps): JSX.Element => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Error Modal"
            style={{
                content: {
                    width: '800px',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    padding: '50px 45px 50px',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '15px',
                    color: '#FF3131'
                },
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(178.99deg, rgba(173, 119, 184, 0.28) 1.38%, rgba(155, 151, 206, 0.51) 99.13%, rgba(155, 151, 206, 0.29) 99.13%)',
                    backdropFilter: 'blur(25px)'
                }
            }}
        >
            <P size="xl" weight="bold" style={{textAlign: 'center'}}>{text}</P>
        </Modal>
    );
};
