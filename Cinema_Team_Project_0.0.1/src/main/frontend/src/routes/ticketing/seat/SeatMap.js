import React from 'react';
import SeatRow from './SeatRow';
import styles from './style/SeatMap.module.css';

const SeatMap = ({ selectedSeats, handleSeatClick, hallConfigurations }) => {
    const { rows, cols } = hallConfigurations;

    return (
        <div className={styles.seatMapContainer}>
            {rows.map((row, rowIndex) => (
                <SeatRow
                    key={rowIndex}
                    row={row}
                    cols={cols}
                    selectedSeats={selectedSeats}
                    handleSeatClick={handleSeatClick}
                    contentContainerStyle={{paddingHorizontal: 25}}
                />
            ))}
        </div>
    );
};

export default SeatMap;
