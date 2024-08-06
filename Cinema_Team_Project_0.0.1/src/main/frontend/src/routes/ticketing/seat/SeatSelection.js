import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './style/SeatSelection.module.css';
import SeatHeader from './SeatHeader';
import SeatMap from './SeatMap';
import SelectionComplete from './SelectionComplete';
import Main,{MovieHeader} from '../../main/Main.js'

function SeatSelection() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall } = location.state || {};
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [numPeople, setNumPeople] = useState(1);
    const [hallConfigurations, setHallConfigurations] = useState({ rows: [], cols: [] });
    const [ticketPrice, setTicketPrice] = useState(15000); // 기본값을 15000으로 설정

    useEffect(() => {
        if (selectedHall) {
            // 열
            axios.get('/seats/rows', { params: { theaterNo: selectedHall } })
                .then(response => {
                    const rows = response.data;
                    setHallConfigurations(prevState => ({ ...prevState, rows: rows }));

                    // 행
                    axios.get('/seats/cols', { params: { theaterNo: selectedHall } })
                        .then(colResponse => {
                            const cols = colResponse.data;
                            setHallConfigurations(prevState => ({ ...prevState, cols: cols }));
                        })
                        .catch(error => console.error('Error fetching column data:', error));
                })
                .catch(error => console.error('Error fetching row data:', error));

            // 관
            axios.get('/seats/theater/price', { params: { theaterNo: selectedHall } })
                .then(response => {
                    setTicketPrice(response.data);
                })
                .catch(error => console.error('Error fetching theater price:', error));
        }
    }, [selectedHall]);

    // 각 관별 가격 정보에 사람 수 곱하기
    const totalPrice = ticketPrice * numPeople;

    const handleSeatClick = (seat) => {
        const row = seat.charCodeAt(0) - 65;
        const col = parseInt(seat.substring(1)) - 1;
        const cols = hallConfigurations.cols.length;
        const leftSectionCols = Math.floor(cols / 2);
        const seatsToSelect = [];

        // 인원 수 만큼 자동 선택
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

        // 우측에 사람 수만큼의 좌석이 없으면 좌측으로 선택
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

    // 좌석 선택 후 인원 수 변경 시 좌석선택 초기화
    const handlePeopleChange = (increment) => {
        const newNumPeople = numPeople + increment;
        if (newNumPeople >= 1 && newNumPeople <= 4) {
            setSelectedSeats([]);
            setNumPeople(newNumPeople);
        }
    };

    // 결제 버튼 클릭시 이동 + 넘기는 값들
    const handlePaymentClick = () => {
        navigate('/PaymentPage', {
            state: {
                selectedMovie,
                selectedTheater,
                selectedDateString,
                selectedTime,
                selectedHall,
                selectedSeats,
                totalAmount: totalPrice
            }
        });
    };

    return (
        <div className={styles.container}>
            <MovieHeader/>
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
                isButtonEnabled={selectedSeats.length === numPeople}
                onButtonClick={handlePaymentClick}
            />
        </div>
    );
}

export default SeatSelection;
