import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieSelection from './MovieSelection';
import TheaterSelection from './TheaterSelection';
import DateSelection from './DateSelection';
import TimeSelection from './TimeSelection';
import Footer from './Footer';
import styles from './style/Ticketing.module.css';

function Ticketing() {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState('전체');
    const [theaters, setTheaters] = useState([]);
    const [selectedTheater, setSelectedTheater] = useState(null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedHall, setSelectedHall] = useState(null);
    const navigate = useNavigate();

    const theaterData = {
        서울: ['서울극장1', '서울극장2'],
        경기: ['경기극장1', '경기극장2'],
    };

    // 영화 데이터 불러오기
    useEffect(() => {
        axios.get('/ticketing/movies', { params: { releaseDate: '20240626' } })
            .then(response => {
                console.log(response.data); // 응답 데이터 로깅
            })
            .catch(error => {
                console.error("API 호출 오류: ", error);
            });
    }, []);

    useEffect(() => {
        const today = new Date();
        const tempDates = [];
        for (let i = 0; i < 20; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            tempDates.push(date);
        }
        setDates(tempDates);
        setSelectedDate(tempDates[0]);
    }, []);

    useEffect(() => {
        if (selectedRegion === '전체') {
            const allTheaters = Object.values(theaterData).flat();
            setTheaters(allTheaters);
        } else {
            setTheaters(theaterData[selectedRegion]);
        }
    }, [selectedRegion]);

    const selectedDateString = selectedDate ? selectedDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }).replace(/ /g, '').replace(/,/g, '') : '';

    const handleSeatSelection = () => {
        navigate('/seat', { state: { selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall } });
    };

    return (
        <div className={styles.container}>
            <div className={styles.selectionContainer}>
                <MovieSelection movies={movies} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
                <TheaterSelection selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} theaters={theaters} selectedTheater={selectedTheater} setSelectedTheater={setSelectedTheater} />
                <DateSelection dates={dates} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <TimeSelection selectedTime={selectedTime} selectedHall={selectedHall} setSelectedTime={setSelectedTime} setSelectedHall={setSelectedHall} />
            </div>
            <Footer 
                selectedMovie={selectedMovie}
                selectedTheater={selectedTheater}
                selectedDateString={selectedDateString}
                selectedTime={selectedTime}
                selectedHall={selectedHall}
                handleSeatSelection={handleSeatSelection}
            />
        </div>
    );
}

export default Ticketing;
