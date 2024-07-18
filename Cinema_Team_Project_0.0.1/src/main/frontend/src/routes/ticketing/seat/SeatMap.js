import React from 'react';
import styles from './style/SeatMap.module.css';

function SeatMap({ selectedHall, selectedSeats, handleSeatClick, numPeople, hallConfigurations }) {
    const { rows, cols } = hallConfigurations;

    if (!rows || !cols) {
        return <div>좌석 정보를 불러오는 중입니다...</div>;
    }

    return (
        <div className={styles.seatMapContainer}>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.seatRow}>
                    {Array.from({ length: cols }).map((_, colIndex) => {
                        const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
                        const isSelected = selectedSeats.includes(seat);
                        return (
                            <button
                                key={colIndex}
                                className={`${styles.seat} ${isSelected ? styles.selectedSeat : ''}`}
                                onClick={() => handleSeatClick(seat)}
                            >
                                {seat}
                            </button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default SeatMap;
