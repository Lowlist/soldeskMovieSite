import React from 'react';
import styles from './style/ButtonContainer.module.css';

const ButtonContainer = ({ handleConfirm }) => {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleConfirm}>확인</button>
        </div>
    );
};

export default ButtonContainer;
