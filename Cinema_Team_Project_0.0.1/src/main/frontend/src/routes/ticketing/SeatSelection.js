import React, { useState } from 'react';
import styles from '../SeatSelection.module.css';

function SeatSelection({ movie, theater, date, hall, time }) {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    const seatsPerRow = 16;
    const aisleAfter = 4;

    function handleSeatClick(seat) {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    }

    function renderSeats() {
        return rows.map(row => (
            <div key={row} className={styles.row}>
                {Array.from({ length: seatsPerRow }, (_, i) => {
                    const seatNumber = i + 1;
                    const seat = `${row}${seatNumber}`;
                    const isSelected = selectedSeats.includes(seat);
                    return (
                        <div
                            key={seat}
                            className={`${styles.seat} ${isSelected ? styles.selectedSeat : ''}`}
                            onClick={() => handleSeatClick(seat)}
                        >
                            {seat}
                        </div>
                    );
                }).reduce((acc, seat, index) => {
                    if ((index + 1) % aisleAfter === 0 && index + 1 !== seatsPerRow) {
                        acc.push(<div key={`aisle-${index}`} className={styles.aisle}></div>);
                    }
                    acc.push(seat);
                    return acc;
                }, [])}
            </div>
        ));
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>영화: {movie}</div>
                <div>극장: {theater}</div>
                <div>날짜: {date}</div>
                <div>관: {hall}</div>
                <div>시간: {time}</div>
            </div>
            <div className={styles.screen}>스크린</div>
            <div className={styles.seatsContainer}>
                {renderSeats()}
            </div>
            <div className={styles.footer}>
                <button className={styles.button}>결제</button>
            </div>
        </div>
    );
}

export default SeatSelection;
