import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}/>
}

export default Modal;