import React from 'react';
import Seat from './Seat';
import Aisle from './Aisle';
import styles from './style/SeatRow.module.css';

const SeatRow = ({ row, cols, specialRow, specialCols, selectedSeats, numPeople, handleSeatClick, aisleIndex }) => {
    const seatRow = [];
    for (let col = 0; col < cols; col++) {
        if (col === aisleIndex - 1) {
            seatRow.push(<Aisle key={`${row}-aisle`} />);
        }

        // 3관 특별 좌석 처리
        if (row === specialRow && (col < specialCols || col >= cols - specialCols)) {
            seatRow.push(<Aisle key={`${row}-${col}`} />);
            continue;
        }

        const seat = `${String.fromCharCode(65 + row)}${col + 1}`;
        const isSelected = selectedSeats.includes(seat);
        const isDisabled = selectedSeats.length >= numPeople && !isSelected;

        seatRow.push(
            <Seat
                key={seat}
                seat={seat}
                isSelected={isSelected}
                isDisabled={isDisabled}
                handleSeatClick={handleSeatClick}
            />
        );
    }
    return <div className={styles.seatRow}>{seatRow}</div>;
};

export default SeatRow;
