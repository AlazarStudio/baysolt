import React from 'react';
import classes from './Modal.module.css'; // Создайте этот файл для стилизации модального окна

function Modal({ show, handleClose, children }) {
    if (!show) {
        return null;
    }

    return (
        <div className={classes.modalBackdrop}>
            <div className={classes.modalContent}>
                <button className={classes.closeButton} onClick={handleClose}>×</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
