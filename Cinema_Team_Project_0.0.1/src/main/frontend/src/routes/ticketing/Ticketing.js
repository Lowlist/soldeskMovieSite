import React, { useState, useEffect } from 'react';
import styles from '../../style/Ticketing.module.css';

function Ticketing() {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState('전체');
    const [theaters, setTheaters] = useState([]);
    const [selectedTheater, setSelectedTheater] = useState(null);
    const [movies, setMovies] = useState(['영화1', '영화2', '영화3', '영화4', '영화5', '영화6', '영화7', '영화8']);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const theaterData = {
        서울: ['서울극장1', '서울극장2'],
        경기: ['경기극장1', '경기극장2'],
    };

    useEffect(() => {
        // 오늘부터 10일 동안의 날짜 생성
        const today = new Date();
        const tempDates = [];
        for (let i = 0; i < 20; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            tempDates.push(date);
        }
        setDates(tempDates);
        setSelectedDate(tempDates[0]); // 기본 선택 날짜를 첫 번째 날짜로 설정
    }, []);

    useEffect(() => {
        if (selectedRegion === '전체') {
            const allTheaters = Object.values(theaterData).flat();
            setTheaters(allTheaters);
        } else {
            setTheaters(theaterData[selectedRegion]);
        }
    }, [selectedRegion]);

    function handleDateClick(date) {
        setSelectedDate(date);
    }

    function renderDates() {
        return dates.map((date, index) => {
        const day = date.toLocaleDateString('ko-KR', { day: '2-digit' });
        const dayOfWeek = date.toLocaleDateString('ko-KR', { weekday: 'short' });

        const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

        return (
            <div
            key={index}
            className={`${styles.calendarItem} ${isSelected ? styles.selectedDate : ''}`}
            onClick={() => handleDateClick(date)}
            >
            {`${day} (${dayOfWeek})`}
            </div>
        );
        });
    }

    const currentMonth = selectedDate ? selectedDate.toLocaleDateString('ko-KR', { month: 'long' }) : '';

    return (
        <div className={styles.container}>
        <div className={styles.selectionContainer}>
            <div className={styles.section}>
            <div className={styles.header}>영화</div>
            <div className={styles.subHeader}></div>
            <div className={styles.list}>
                {movies.map((movie, index) => (
                <div
                    key={index}
                    className={`${styles.movieItem} ${selectedMovie === movie ? styles.selectedMovie : ''}`}
                    onClick={() => setSelectedMovie(movie)}
                >
                    {movie}
                </div>
                ))}
            </div>
            </div>
            <div className={styles.section}>
            <div className={styles.header}>극장</div>
            <div className={styles.subHeader}></div>
            <div className={styles.theaterContainer}>
                <div className={styles.regionList}>
                {['전체', '서울', '경기'].map((region) => (
                    <div
                    key={region}
                    className={`${styles.regionItem} ${selectedRegion === region ? styles.selectedRegion : ''}`}
                    onClick={() => setSelectedRegion(region)}
                    >
                    {region}
                    </div>
                ))}
                </div>
                <div className={styles.theaterList}>
                {theaters.map((theater, index) => (
                    <div
                    key={index}
                    className={`${styles.theaterItem} ${selectedTheater === theater ? styles.selectedTheater : ''}`}
                    onClick={() => setSelectedTheater(theater)}
                    >
                    {theater}
                    </div>
                ))}
                </div>
            </div>
            </div>
            <div className={styles.section}>
            <div className={styles.header}>날짜</div>
            <div className={styles.currentMonth}>{currentMonth}</div>
            <div className={styles.calendar}>{renderDates()}</div>
            </div>
            <div className={styles.section}>
            <div className={styles.header}>시간</div>
            <div className={styles.timeList}>
                {/* 시간 목록은 데이터베이스에서 가져올 예정 */}
            </div>
            </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.movieInfo}>
            {/* 영화 정보는 데이터베이스에서 가져올 예정 */}
            </div>
            <div className={styles.buttonContainer}>
            <button className={styles.button}>좌석선택</button>
            <button className={styles.button}>결제</button>
            </div>
        </div>
        </div>
    );
}

export default Ticketing;