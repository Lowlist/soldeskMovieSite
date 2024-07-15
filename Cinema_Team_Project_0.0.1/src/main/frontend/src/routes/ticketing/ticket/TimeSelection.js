import React, { useState, useEffect } from 'react';
import styles from './style/TimeSelection.module.css';
import axios from 'axios';

const TimeSelection = ({ selectedTheater, theaterNo, selectedTime, selectedHall, setSelectedTime, setSelectedHall }) => {
    const [halls, setHalls] = useState([]);

    useEffect(() => {
        if (theaterNo) {
            axios.get('/ticketing/theater-details', { params: { cinemaNo: theaterNo } })
                .then(response => {
                    const hallData = response.data.map(theater => ({
                        name: getTheaterName(theater.no),
                        times: generateTimes(theater.no),
                        maxSeats: theater.max
                    }));
                    setHalls(hallData);
                })
                .catch(error => console.error("API 호출 오류: ", error));
        }
    }, [theaterNo]);

    const getTheaterName = (no) => {
        switch (no) {
            case 1: return '2D 1관(일반)';
            case 2: return '2D 2관(리클라이너)';
            case 3: return 'IMAX LASER 2D IMAX관';
            case 4: return 'ULTRA 4DX관';
            default: return '';
        }
    };

    const generateTimes = (theaterNo) => {
        switch (theaterNo) {
            case 1:
                return Array.from({ length: 30 }, (_, i) => {
                    const hours = 10 + Math.floor(i * 20 / 60);
                    const minutes = (i * 20) % 60;
                    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                });
            case 2:
                return Array.from({ length: 28 }, (_, i) => {
                    const hours = 10 + Math.floor(i * 30 / 60);
                    const minutes = (10 + i * 30) % 60;
                    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                });
            case 3:
                return Array.from({ length: 8 }, (_, i) => {
                    const hours = 9 + Math.floor(i * 120 / 60);
                    const minutes = (i * 60) % 60;
                    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                });
            case 4:
                return Array.from({ length: 15 }, (_, i) => {
                    const hours = 10 + Math.floor(i * 40 / 60);
                    const minutes = (i * 40) % 60;
                    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                });
            default:
                return [];
        }
    };

    const handleTimeClick = (time, hall) => {
        setSelectedTime(time);
        setSelectedHall(hall);
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>시간</div>
            <div className={`${styles.timeList} ${styles.scrollable}`}>
                {halls.map((hall, index) => (
                    <div key={index} className={styles.timeHall}>
                        <hr className={styles.hallLine}></hr>
                        <div className={styles.timeHallHeader}>{hall.name}</div>
                        <div className={styles.timeRow}>
                            {hall.times.map((time, idx) => (
                                <div key={idx}
                                    className={styles.timeItem}
                                    onClick={() => handleTimeClick(time, hall.name)}
                                >
                                    <div className={`${styles.timeSection} ${selectedTime === time && selectedHall === hall.name ? styles.selectedTime : ''}`}>
                                        {time}
                                    </div>
                                    <div className={styles.remainingSeats}>{hall.maxSeats}석</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeSelection;
