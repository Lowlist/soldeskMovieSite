import React, { useState, useEffect } from 'react';
import styles from '../Ticketing.module.css';

function Ticketing() {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState('전체');
    const [theaters, setTheaters] = useState([]);
    const [selectedTheater, setSelectedTheater] = useState(null);
    const [movies, setMovies] = useState(['영화1', '영화2', '영화3', '영화4', '영화5', '영화6', '영화7', '영화8']);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedHall, setSelectedHall] = useState(null);

    const theaterData = {
        서울: ['서울극장1', '서울극장2'],
        경기: ['경기극장1', '경기극장2'],
    };

    useEffect(() => {
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

    function handleTimeClick(time, hall) {
        setSelectedTime(time);
        setSelectedHall(hall);
    }

    function renderTimes() {
        const halls = [
            {
                name: '1관',
                times: Array.from({ length: 10 }, (_, i) => {
                    const hours = 10 + Math.floor(i * 20 / 60);
                    const minutes = (i * 20) % 60;
                    return `${hours}:${minutes.toString().padStart(2, '0')}`;
                })
            },
            {
                name: '2관',
                times: Array.from({ length: 10 }, (_, i) => {
                    const hours = 10 + Math.floor(i * 30 / 60);
                    const minutes = (10 + i * 30) % 60;
                    return `${hours}:${minutes.toString().padStart(2, '0')}`;
                })
            },
            {
                name: '3관',
                times: Array.from({ length: 10 }, (_, i) => {
                    const hours = 9 + Math.floor(i * 60 / 60);
                    const minutes = (30 + i * 60) % 60;
                    return `${hours}:${minutes.toString().padStart(2, '0')}`;
                })
            }
        ];

        return halls.map((hall, index) => (
            <div key={index} className={styles.timeHall}>
                <div className={styles.timeHallHeader}>{hall.name}</div>
                <div className={styles.timeRow}>
                    {hall.times.map((time, idx) => (
                        <div
                            key={idx}
                            className={`${styles.timeItem} ${selectedTime === time && selectedHall === hall.name ? styles.selectedTime : ''}`}
                            onClick={() => handleTimeClick(time, hall.name)}
                        >
                            {time}
                        </div>
                    ))}
                </div>
            </div>
        ));
    }

    const currentMonth = selectedDate ? selectedDate.toLocaleDateString('ko-KR', { month: 'long' }) : '';
    const selectedDateString = selectedDate ? selectedDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }).replace(/ /g, '').replace(/,/g, '') : '';

    return (
        <div className={styles.container}>
            <div className={styles.selectionContainer}>
                <div className={styles.section}>
                    <div className={styles.header}>영화</div>
                    <div className={styles.subHeader}></div>
                    <div className={`${styles.list} ${styles.scrollable}`}>
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
                        <div className={`${styles.regionList} ${styles.scrollable}`}>
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
                        <div className={`${styles.theaterList} ${styles.scrollable}`}>
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
                    <div className={`${styles.calendar} ${styles.scrollable}`}>{renderDates()}</div>
                </div>
                <div className={styles.section}>
                    <div className={styles.header}>시간</div>
                    <div className={`${styles.timeList} ${styles.scrollable}`}>{renderTimes()}</div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.movieInfo}>
                    <div>영화: {selectedMovie}</div>
                    <div>극장: {selectedTheater}</div>
                    <div>일시: {selectedDateString} {selectedTime}</div>
                    <div>상영관: {selectedHall}</div>
                    <div>인원: </div>
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
