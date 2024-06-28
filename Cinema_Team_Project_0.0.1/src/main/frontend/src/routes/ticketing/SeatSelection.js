import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './style/SeatSelection.module.css';

function SeatSelection() {
    const location = useLocation();
    const { selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall } = location.state || {};
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [numAdults, setNumAdults] = useState(0);
    const [numChildren, setNumChildren] = useState(0);
    const [numSeniors, setNumSeniors] = useState(0);

    useEffect(() => {
        console.log(location.state);
    }, [location.state]);

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const renderSeats = () => {
        const rows = 10;
        const cols = 8;
        const aisleIndex = 4;
        const seats = [];

        for (let row = 0; row < rows; row++) {
            const seatRow = [];
            for (let col = 0; col < cols; col++) {
                const seat = `${String.fromCharCode(65 + row)}${col + 1}`;
                const isSelected = selectedSeats.includes(seat);
                seatRow.push(
                    <div
                        key={seat}
                        className={`${styles.seat} ${isSelected ? styles.selectedSeat : ''}`}
                        onClick={() => handleSeatClick(seat)}
                    >
                        {seat}
                    </div>
                );
                if (col === aisleIndex - 1) {
                    seatRow.push(<div key={`${row}-aisle`} className={styles.aisle}></div>);
                }
            }
            seats.push(
                <div key={row} className={styles.seatRow}>
                    {seatRow}
                </div>
            );
        }

        return seats;
    };

    const handleConfirm = () => {
        console.log('Selected seats:', selectedSeats);
        console.log('Adults:', numAdults);
        console.log('Children:', numChildren);
        console.log('Seniors:', numSeniors);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.movieInfo}>
                    <div className={styles.peopleContainer}>
                        <div className={styles.peopleRow}>
                            <div className={styles.peopleLabel}>성인</div>
                            <div className={styles.peopleCount}>
                                <button onClick={() => setNumAdults(Math.max(0, numAdults - 1))}>-</button>
                                <span>{numAdults}</span>
                                <button onClick={() => setNumAdults(numAdults + 1)}>+</button>
                            </div>
                        </div>
                        <div className={styles.peopleRow}>
                            <div className={styles.peopleLabel}>청소년</div>
                            <div className={styles.peopleCount}>
                                <button onClick={() => setNumChildren(Math.max(0, numChildren - 1))}>-</button>
                                <span>{numChildren}</span>
                                <button onClick={() => setNumChildren(numChildren + 1)}>+</button>
                            </div>
                        </div>
                        <div className={styles.peopleRow}>
                            <div className={styles.peopleLabel}>경로</div>
                            <div className={styles.peopleCount}>
                                <button onClick={() => setNumSeniors(Math.max(0, numSeniors - 1))}>-</button>
                                <span>{numSeniors}</span>
                                <button onClick={() => setNumSeniors(numSeniors + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.movieDetails}>
                        <div>영화: {selectedMovie}</div>
                        <div>극장: {selectedTheater}</div>
                        <div>일시: {selectedDateString} {selectedTime}</div>
                        <div>상영관: {selectedHall}</div>
                    </div>
                </div>
            </div>
            <div className={styles.seatContainer}>
                <div className={styles.screen}>스크린</div>
                {renderSeats()}
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleConfirm}>확인</button>
            </div>
        </div>
    );
}

export default SeatSelection;
