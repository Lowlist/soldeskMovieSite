import React from 'react';
import styles from './style/PeopleSelector.module.css';

const PeopleSelector = ({ numPeople, handlePeopleChange }) => {
    return (
        <div className={styles.peopleContainer}>
            <div className={styles.peopleRow}>
                <div className={styles.peopleLabel}>인원 선택</div>
                <div className={styles.peopleCount}>
                    <button onClick={() => handlePeopleChange(-1)}>-</button>
                    <span>{numPeople}</span>
                    <button onClick={() => handlePeopleChange(1)}>+</button>
                </div>
            </div>
        </div>
    );
};

export default PeopleSelector;
