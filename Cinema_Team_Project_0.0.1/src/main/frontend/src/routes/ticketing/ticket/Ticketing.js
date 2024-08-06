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
        // 오늘 기준 1달전 (20240624 형식)
        const today = new Date();
        const date = new Date(today); // 오늘
        date.setDate(today.getDate() - 30); // 오늘기준 1달전
        // ex.20240624 형식으로 변경
        const formattedDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;

        axios.get('/ticketing/movies', { params: { releaseDate: formattedDate } })
            .then(response => {
                const movieData = response.data.Data[0].Result; // API 불러온 데이터
                const filteredMovies = movieData
                    .filter(movie => movie.posters !== "") // 포스터 없는 영화 제외 (보통 개봉 전 영화)
                    .filter(movie => movie.genre !== '에로') // '에로' 장르 제외
                    // 데이터 추출
                    .map(movie => ({
                        title: movie.title,
                        poster: movie.posters.split('|')[0] || movie.posters, // 첫 번째 포스터 이미지 추출
                        genre: movie.genre || '장르 정보 없음', // 장르 데이터가 비어 있을 경우 처리
                        runtime: movie.ratings.rating[0].runtime // 런닝타임
                    }));
                setMovies(filteredMovies);

            })
            .catch(error => {
                console.error("API 호출 오류: ", error);
            });
    }, []);

    // 날짜
    useEffect(() => {
        const today = new Date(); // 오늘
        const tempDates = [];
        for (let i = 0; i < 10; i++) { // 오늘부터 10일까지
            const date = new Date(today);
            date.setDate(today.getDate() + i); // 오늘 기준 + 날짜
            tempDates.push(date);   // 배열에 추가
        }
        setDates(tempDates);
        setSelectedDate(tempDates[0]);
    }, []);

    // 날짜 형식 10일(목)
    const selectedDateString = selectedDate ? selectedDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }).replace(/ /g, '').replace(/,/g, '') : '';

    // 좌석 선택으로 넘길 데이터
    const seatSelection = () => {
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
                    {/* 영화 선택 */}
                    <MovieSelection movies={movies} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
                    {/* 극장 선택 */}
                    <TheaterSelection selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} theaters={theaters} selectedTheater={selectedTheater} setSelectedTheater={setSelectedTheater} setSelectedTheaterNo={setSelectedTheaterNo} />
                    {/* 날짜 선택 */}
                    <DateSelection dates={dates} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                    {/* 시간 선택 */}
                    <TimeSelection selectedMovie={selectedMovie} selectedTheater={selectedTheater} theaterNo={selectedTheaterNo} selectedDateString={selectedDateString} selectedTime={selectedTime} selectedHall={selectedHall} setSelectedTime={setSelectedTime} setSelectedHall={setSelectedHall} />
                </div>
                {/* 선택 한 정보들 */}
                <TicketingFooter
                    selectedMovie={selectedMovie}
                    selectedTheater={selectedTheater}
                    selectedDateString={selectedDateString}
                    selectedTime={selectedTime}
                    selectedHall={selectedHall}
                    // 좌석 선택으로 이동
                    handleSeatSelection={seatSelection}
                />
            </div>
        </div>
    );
}

export default Ticketing;
