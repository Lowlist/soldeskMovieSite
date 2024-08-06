import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieSelection from './MovieSelection';
import TheaterSelection from './TheaterSelection';
import DateSelection from './DateSelection';
import TimeSelection from './TimeSelection';
import Main,{MovieHeader} from '../../main/Main.js';
import TicketingFooter from './TicketingFooter';
import styles from './style/Ticketing.module.css';

function Ticketing() {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState('전체');
    const [theaters, setTheaters] = useState([]);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedTheater, setSelectedTheater] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedHall, setSelectedHall] = useState(null);
    const [selectedTheaterNo, setSelectedTheaterNo] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date();
        const date = new Date(today);
        date.setDate(today.getDate() - 30);
        const formattedDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;

        axios.get('/ticketing/movies', { params: { releaseDate: formattedDate } })
            .then(response => {
                const movieData = response.data.Data[0].Result;
                console.log(movieData);
                const filteredMovies = movieData
                    .filter(movie => movie.posters !== "")
                    .filter(movie => movie.genre !== '에로') // '에로' 장르 제외
                    .map(movie => ({
                        title: movie.title,
                        poster: movie.posters.split('|')[0] || movie.posters, // 첫 번째 포스터 이미지 추출
                        genre: movie.genre || '장르 정보 없음', // 장르 데이터가 비어 있을 경우 처리
                        runtime: movie.ratings.rating[0].runtime // 런닝타임 추가
                    }));
                setMovies(filteredMovies);

            })
            .catch(error => {
                console.error("API 호출 오류: ", error);
            });
    }, []);

    useEffect(() => {
        const today = new Date();
        const tempDates = [];
        for (let i = 0; i < 10; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            tempDates.push(date);
        }
        setDates(tempDates);
        setSelectedDate(tempDates[0]);
    }, []);


    const selectedDateString = selectedDate ? selectedDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }).replace(/ /g, '').replace(/,/g, '') : '';

    const handleSeatSelection = () => {
        if (selectedMovie && selectedTheater && selectedDateString && selectedTime) {
            navigate('/seat', {
                state: {
                    selectedMovie,
                    selectedTheater,
                    selectedDateString,
                    selectedTime,
                    selectedHall,
                    selectedTheaterNo
                }
            });
        }
    };

    return (
        <div>
            <MovieHeader/>
            <div className={styles.container}>
                <div className={styles.selectionContainer}>
                    <MovieSelection movies={movies} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
                    <TheaterSelection selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} theaters={theaters} selectedTheater={selectedTheater} setSelectedTheater={setSelectedTheater} setSelectedTheaterNo={setSelectedTheaterNo} />
                    <DateSelection dates={dates} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                    <TimeSelection selectedMovie={selectedMovie} selectedTheater={selectedTheater} theaterNo={selectedTheaterNo} selectedDateString={selectedDateString} selectedTime={selectedTime} selectedHall={selectedHall} setSelectedTime={setSelectedTime} setSelectedHall={setSelectedHall} />
                </div>
                <TicketingFooter
                    selectedMovie={selectedMovie}
                    selectedTheater={selectedTheater}
                    selectedDateString={selectedDateString}
                    selectedTime={selectedTime}
                    selectedHall={selectedHall}
                    handleSeatSelection={handleSeatSelection}
                />
            </div>
        </div>
    );
}

export default Ticketing;
