import React from 'react';
import styles from './style/Seat.module.css';

const Seat = ({ seat, isSelected, handleSeatClick, isMidpoint, isDisabled  }) => {
    return (
        <div className={`${styles.seat} ${isSelected ? styles.selectedSeat : ''} ${isMidpoint ? styles.midpointSeat : ''} ${isDisabled ? styles.disabledSeat : ''}`} onClick={() => !isDisabled && handleSeatClick(seat)}>
            {seat}
        </div>
    );
};

export default Seat;
