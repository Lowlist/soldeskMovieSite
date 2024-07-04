import React from 'react';
import styles from './style/Seat.module.css';

const Seat = ({ seat, isSelected, isDisabled, handleSeatClick }) => {
    return (
        <div
            className={`${styles.seat} ${isSelected ? styles.selectedSeat : ''} ${isDisabled ? styles.disabledSeat : ''}`}
            onClick={() => !isDisabled && handleSeatClick(seat)}
        >
            {seat}
        </div>
    );
};

export default Seat;
