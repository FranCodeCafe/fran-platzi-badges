import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="DeleteBadgeModal">
            <h1>Are You Sure?</h1>
            <p>You are about to delete this badge</p>
        </div>
        <div>
            <button>Cancel</button>
            <button>Delete</button>
        </div>
    </Modal>
}

export default Modal;