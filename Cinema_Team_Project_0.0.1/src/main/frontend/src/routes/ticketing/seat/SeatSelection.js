import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from './style/SeatSelection.module.css';
import SeatHeader from './SeatHeader';
import SeatMap from './SeatMap';
import SelectionComplete from './SelectionComplete';

function SeatSelection() {
    const location = useLocation();
    const { selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall } = location.state || {};
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [numPeople, setNumPeople] = useState(1);
    const [hallConfigurations, setHallConfigurations] = useState({ rows: [], cols: [] });
    const [ticketPrice, setTicketPrice] = useState(15000); // 기본값을 15000으로 설정

    useEffect(() => {
        if (selectedHall) {
            axios.get('/seats/rows', { params: { theaterNo: selectedHall } })
                .then(response => {
                    const rows = response.data;
                    setHallConfigurations(prevState => ({ ...prevState, rows: rows }));

                    // 각 행에 대해 좌석 정보를 가져오기
                    axios.get('/seats/cols', { params: { theaterNo: selectedHall } })
                        .then(colResponse => {
                            const cols = colResponse.data;
                            setHallConfigurations(prevState => ({ ...prevState, cols: cols }));
                        })
                        .catch(error => console.error('Error fetching column data:', error));
                })
                .catch(error => console.error('Error fetching row data:', error));

            // 선택된 관의 가격을 가져오기
            axios.get('/seats/theater/price', { params: { theaterNo: selectedHall } })
                .then(response => {
                    setTicketPrice(response.data);
                })
                .catch(error => console.error('Error fetching theater price:', error));
        }
    }, [selectedHall]);

    const totalPrice = ticketPrice * numPeople;

    const handleSeatClick = (seat) => {
        const row = seat.charCodeAt(0) - 65;
        const col = parseInt(seat.substring(1)) - 1;
        const cols = hallConfigurations.cols.length;
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
            <SeatHeader
                selectedMovie={selectedMovie}
                selectedTheater={selectedTheater}
                selectedDateString={selectedDateString}
                selectedTime={selectedTime}
                selectedHall={selectedHall}
                numPeople={numPeople}
                handlePeopleChange={handlePeopleChange}
            />
            <div className={styles.seatMapWrapper}>
                <SeatMap
                    selectedHall={selectedHall}
                    selectedSeats={selectedSeats}
                    handleSeatClick={handleSeatClick}
                    hallConfigurations={hallConfigurations}
                    numPeople={numPeople}
                />
            </div>
            <SelectionComplete
                movie={selectedMovie}
                theater={selectedTheater}
                date={selectedDateString}
                time={selectedTime}
                hall={selectedHall}
                audience={`일반 ${numPeople}명`}
                seatType="일반석"
                seatNumbers={selectedSeats.join(', ')}
                ticketPrice={`${ticketPrice.toLocaleString()} 원`}
                totalPrice={`${totalPrice.toLocaleString()} 원`}
            />
        </div>
    );
}

export default SeatSelection;
