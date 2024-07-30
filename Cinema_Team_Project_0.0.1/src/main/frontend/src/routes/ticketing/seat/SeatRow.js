import React from 'react';
import Seat from './Seat';
import styles from './style/SeatRow.module.css';

const SeatRow = ({ row, cols, selectedSeats, handleSeatClick, numPeople }) => {
    const midpoint = Math.floor(cols.length / 2) - 1;
    const isRowDisabled = selectedSeats.length >= numPeople;

    return (
        <div className={styles.seatRow}>
            {cols.map((col, colIndex) => (
                <Seat
                    key={colIndex}
                    seat={`${row.rowLabel}${col.line}`}
                    isSelected={selectedSeats.includes(`${row.rowLabel}${col.line}`)}
                    handleSeatClick={handleSeatClick}
                    isMidpoint={colIndex === midpoint}
                    isDisabled={isRowDisabled && !selectedSeats.includes(`${row.rowLabel}${col.line}`)}
                />
            ))}
        </div>
    );
};

export default SeatRow;
