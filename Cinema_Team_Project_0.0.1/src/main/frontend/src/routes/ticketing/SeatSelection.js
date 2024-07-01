import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './style/SeatSelection.module.css';

function SeatSelection() {
    const location = useLocation();
    const { selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall } = location.state || {};
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [numPeople, setNumPeople] = useState(1);

    useEffect(() => {
        console.log(location.state);
    }, [location.state]);

    const handleSeatClick = (seat) => {
        const row = seat.charCodeAt(0) - 65;
        const col = parseInt(seat.substring(1)) - 1;

        if (selectedSeats.includes(seat)) {
            setSelectedSeats([]);
            return;
        }

        const startCol = Math.floor(col / 4) * 4; // 0, 4로 시작하는 열을 찾기 위한 계산
        const seatsToSelect = [];

        for (let i = 0; i < numPeople; i++) {
            const newSeat = `${String.fromCharCode(65 + row)}${startCol + 1 + i}`;
            seatsToSelect.push(newSeat);
        }

        const areAllSeatsAvailable = seatsToSelect.every(s => !selectedSeats.includes(s));
        if (areAllSeatsAvailable) {
            setSelectedSeats(seatsToSelect);
        }
    };

    const renderSeats = () => {
        const rows = 8;
        const cols = 8;
        const aisleIndices = [0, 4, 8];
        const seats = [];

        for (let row = 0; row < rows; row++) {
            const seatRow = [];
            for (let col = 0; col < cols + 3; col++) {
                if (aisleIndices.includes(col)) {
                    seatRow.push(<div key={`${row}-aisle-${col}`} className={styles.aisle}></div>);
                } else {
                    const seat = `${String.fromCharCode(65 + row)}${col - Math.floor(col / 5) + 1}`;
                    const isSelected = selectedSeats.includes(seat);
                    const isDisabled = selectedSeats.length >= numPeople && !isSelected;
                    seatRow.push(
                        <div
                            key={seat}
                            className={`${styles.seat} ${isSelected ? styles.selectedSeat : ''} ${isDisabled ? styles.disabledSeat : ''}`}
                            onClick={() => !isDisabled && handleSeatClick(seat)}
                        >
                            {seat}
                        </div>
                    );
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
        console.log('Number of people:', numPeople);
    };

    const handlePeopleChange = (increment) => {
        const newNumPeople = numPeople + increment;
        if (newNumPeople >= 1 && newNumPeople <= 4) {
            setSelectedSeats([]);
            setNumPeople(newNumPeople);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.movieInfo}>
                    <div className={styles.peopleContainer}>
                        <div className={styles.peopleRow}>
                            <div className={styles.peopleLabel}>인원 선택</div>
                            <div className={styles.peopleCount}>
                                <button onClick={() => handlePeopleChange(-1)}>-</button>
                                <span>{numPeople}</span>
                                <button onClick={() => handlePeopleChange(1)}>+</button>
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
