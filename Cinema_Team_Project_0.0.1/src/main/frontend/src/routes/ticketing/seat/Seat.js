import React from 'react';
import styles from './style/Seat.module.css';

const Seat = ({ seat, isSelected, handleSeatClick }) => {
    return (
        <div
            className={`${styles.seat} ${isSelected ? styles.selectedSeat : ''}`}
            onClick={() => handleSeatClick(seat)}
        >
            {seat}
        </div>
    );
};

export default Seat;
