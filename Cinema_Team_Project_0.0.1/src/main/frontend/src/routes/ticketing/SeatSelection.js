import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './style/SeatSelection.module.css';

function SeatSelection() {
    const location = useLocation();
    const { selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall } = location.state || {};
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [numPeople, setNumPeople] = useState(1);

    const hallConfigurations = {
        '1관': { rows: 8, cols: 8 },
        '2관': { rows: 16, cols: 16 },
        '3관': { rows: 24, cols: 24 },
    };

    useEffect(() => {
        console.log(location.state);
    }, [location.state]);

    const handleSeatClick = (seat) => {
        const row = seat.charCodeAt(0) - 65;
        const col = parseInt(seat.substring(1)) - 1;
        const cols = hallConfigurations[selectedHall].cols;
        const leftSectionCols = Math.floor(cols / 2) - 1;
        const rightSectionCols = Math.ceil(cols / 2);
        const seatsToSelect = [];

        // 좌측 섹션에서 좌석 선택
        if (col < leftSectionCols) {
            for (let i = 0; i < numPeople; i++) {
                const seatToCheck = `${String.fromCharCode(65 + row)}${col + 1 + i}`;
                if (col + i < leftSectionCols && !selectedSeats.includes(seatToCheck)) {
                    seatsToSelect.push(seatToCheck);
                } else {
                    seatsToSelect.length = 0;
                    break;
                }
            }

            if (seatsToSelect.length < numPeople) {
                seatsToSelect.length = 0;
                for (let i = 0; i < numPeople; i++) {
                    const seatToCheck = `${String.fromCharCode(65 + row)}${col + 1 - i}`;
                    if (col - i >= 0 && !selectedSeats.includes(seatToCheck)) {
                        seatsToSelect.push(seatToCheck);
                    } else {
                        seatsToSelect.length = 0;
                        break;
                    }
                }
                seatsToSelect.reverse();
            }
        }

        // 우측 섹션에서 좌석 선택
        if (col >= leftSectionCols) {
            for (let i = 0; i < numPeople; i++) {
                const seatToCheck = `${String.fromCharCode(65 + row)}${col + 1 + i}`;
                if (col + i < cols && !selectedSeats.includes(seatToCheck)) {
                    seatsToSelect.push(seatToCheck);
                } else {
                    seatsToSelect.length = 0;
                    break;
                }
            }

            if (seatsToSelect.length < numPeople) {
                seatsToSelect.length = 0;
                for (let i = 0; i < numPeople; i++) {
                    const seatToCheck = `${String.fromCharCode(65 + row)}${col + 1 - i}`;
                    if (col - i >= leftSectionCols && !selectedSeats.includes(seatToCheck)) {
                        seatsToSelect.push(seatToCheck);
                    } else {
                        seatsToSelect.length = 0;
                        break;
                    }
                }
                seatsToSelect.reverse();
            }
        }

        const areAllSeatsAvailable = seatsToSelect.every(s => !selectedSeats.includes(s));
        if (areAllSeatsAvailable) {
            setSelectedSeats(seatsToSelect);
        } else if (selectedSeats.every(s => seatsToSelect.includes(s))) {
            setSelectedSeats([]);
        }
    };

    const renderSeats = () => {
        const { rows, cols } = hallConfigurations[selectedHall] || hallConfigurations['1관'];
        const aisleIndex = Math.floor(cols / 2);
        const seats = [];

        for (let row = 0; row < rows; row++) {
            const seatRow = [];
            for (let col = 0; col < cols; col++) {
                const seat = `${String.fromCharCode(65 + row)}${col + 1}`;
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
