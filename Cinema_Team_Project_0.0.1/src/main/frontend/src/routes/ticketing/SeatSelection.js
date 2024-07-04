import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './style/SeatSelection.module.css';
import Header from './Header';
import SeatMap from './SeatMap';
import SelectionComplete from './SelectionComplete';

function SeatSelection() {
    const location = useLocation();
    const { selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall } = location.state || {};
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [numPeople, setNumPeople] = useState(1);

    const hallConfigurations = {
        '1관': { rows: 8, cols: 8 },
        '2관': { rows: 14, cols: 16 },
        '3관': { rows: 11, cols: 24, specialRow: 0, specialCols: 3 },
    };

    const ticketPrice = 15000;
    const totalPrice = ticketPrice * numPeople;

    useEffect(() => {
        console.log(location.state);
    }, [location.state]);

    const handleSeatClick = (seat) => {
        const row = seat.charCodeAt(0) - 65;
        const col = parseInt(seat.substring(1)) - 1;
        const cols = hallConfigurations[selectedHall].cols;
        const leftSectionCols = Math.floor(cols / 2);
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

    const handlePeopleChange = (increment) => {
        const newNumPeople = numPeople + increment;
        if (newNumPeople >= 1 && newNumPeople <= 4) {
            setSelectedSeats([]);
            setNumPeople(newNumPeople);
        }
    };

    return (
        <div className={styles.container}>
            <Header
                selectedMovie={selectedMovie}
                selectedTheater={selectedTheater}
                selectedDateString={selectedDateString}
                selectedTime={selectedTime}
                selectedHall={selectedHall}
                numPeople={numPeople}
                handlePeopleChange={handlePeopleChange}
            />
            <SeatMap
                selectedHall={selectedHall}
                selectedSeats={selectedSeats}
                handleSeatClick={handleSeatClick}
                numPeople={numPeople}
                hallConfigurations={hallConfigurations}
            />
            <SelectionComplete
                movie={selectedMovie}
                theater={selectedTheater}
                date={selectedDateString}
                time={selectedTime}
                hall={selectedHall}
                audience={`일반 ${numPeople}명`}
                seatType="일반석"
                seatNumbers={selectedSeats.join(', ')}
                ticketPrice={`15,000 원`}
                totalPrice={`${totalPrice.toLocaleString()}원`}
            />
        </div>
    );
}

export default SeatSelection;
