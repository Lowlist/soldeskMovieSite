import React from 'react';
import Seat from './Seat';
import styles from './style/SeatRow.module.css';

const SeatRow = ({ row, cols, selectedSeats, handleSeatClick }) => {
    console.log('Rendering SeatRow for row:', row, 'with cols:', cols);

    return (
        <div className={styles.seatRow}>
            {cols.map((col, colIndex) => (
                <Seat
                    key={colIndex}
                    seat={`${row.rowLabel}${col.line}`}
                    isSelected={selectedSeats.includes(`${row.rowLabel}${col.line}`)}
                    handleSeatClick={handleSeatClick}
                />
            ))}
        </div>
    );
};

export default SeatRow;
