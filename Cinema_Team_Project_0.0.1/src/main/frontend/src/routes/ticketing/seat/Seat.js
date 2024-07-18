import React from 'react';
import styles from './style/Seat.module.css';

const Seat = ({ seat, isSelected, handleSeatClick, isMidpoint }) => {
    return (
        <div
            className={`${styles.seat} ${isSelected ? styles.selectedSeat : ''} ${isMidpoint ? styles.midpointSeat : ''}`}
            onClick={() => handleSeatClick(seat)}
        >
            {seat}
        </div>
    );
};

export default Seat;
