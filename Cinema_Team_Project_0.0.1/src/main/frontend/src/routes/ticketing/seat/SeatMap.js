import React from 'react';
import SeatRow from './SeatRow';
import styles from './style/SeatMap.module.css';

const SeatMap = ({ selectedHall, hallConfigurations, selectedSeats, numPeople, handleSeatClick }) => {
    const { rows, cols, specialRow, specialCols } = hallConfigurations[selectedHall] || hallConfigurations['1관'];
    const aisleIndex = Math.floor(cols / 2) + 1;

    const renderSeats = () => {
        const seats = [];
        for (let row = 0; row < rows; row++) {
            seats.push(
                <SeatRow
                    key={row}
                    row={row}
                    cols={cols}
                    specialRow={specialRow}
                    specialCols={specialCols}
                    selectedSeats={selectedSeats}
                    numPeople={numPeople}
                    handleSeatClick={handleSeatClick}
                    aisleIndex={aisleIndex}
                />
            );
        }
        return seats;
    };

    return (
        <div className={styles.seatContainer}>
            <div className={styles.screen}>스크린</div>
            {renderSeats()}
        </div>
    );
};

export default SeatMap;
