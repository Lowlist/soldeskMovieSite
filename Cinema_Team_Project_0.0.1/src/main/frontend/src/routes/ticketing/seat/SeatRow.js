import React from 'react';
import Seat from './Seat';
import styles from './style/SeatRow.module.css';

const SeatRow = ({ row, cols, selectedSeats, handleSeatClick }) => {
    const midpoint = Math.floor(cols.length / 2) - 1;

    return (
        <div className={styles.seatRow}>
            {cols.map((col, colIndex) => (
                <Seat
                    key={colIndex}
                    seat={`${row.rowLabel}${col.line}`}
                    isSelected={selectedSeats.includes(`${row.rowLabel}${col.line}`)}
                    handleSeatClick={handleSeatClick}
                    isMidpoint={colIndex === midpoint}
                />
            ))}
        </div>
    );
};

export default SeatRow;
