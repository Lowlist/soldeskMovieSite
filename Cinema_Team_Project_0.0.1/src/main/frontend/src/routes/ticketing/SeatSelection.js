import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import SeatMap from './SeatMap';
import ButtonContainer from './ButtonContainer';
import styles from './style/SeatSelection.module.css';

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

    useEffect(() => {
        console.log(location.state);
    }, [location.state]);

    const handleSeatClick = (seat) => {
        // 좌석 선택 로직
    };

    const handlePeopleChange = (increment) => {
        const newNumPeople = numPeople + increment;
        if (newNumPeople >= 1 && newNumPeople <= 4) {
            setSelectedSeats([]);
            setNumPeople(newNumPeople);
        }
    };

    const handleConfirm = () => {
        console.log('Selected seats:', selectedSeats);
        console.log('Number of people:', numPeople);
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
                hallConfigurations={hallConfigurations}
                selectedSeats={selectedSeats}
                numPeople={numPeople}
                handleSeatClick={handleSeatClick}
            />
            <ButtonContainer handleConfirm={handleConfirm} />
        </div>
    );
}

export default SeatSelection;
