import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style/TimeSelection.module.css';

const TimeSelection = ({ selectedMovie, selectedTheater, theaterNo, selectedDateString, selectedTime, selectedHall, setSelectedTime, setSelectedHall }) => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        if (selectedMovie && theaterNo && selectedDateString) {
            axios.get('/schedules')
                .then(response => {
                    const allSchedules = response.data;
                    const filteredSchedules = allSchedules.filter(schedule => 
                        schedule.movieNo === selectedMovie.no && 
                        schedule.theaterNo === theaterNo && 
                        new Date(schedule.date).toDateString() === new Date(selectedDateString).toDateString()
                    );
                    setSchedules(filteredSchedules);
                })
                .catch(error => console.error("API 호출 오류: ", error));
        }
    }, [selectedMovie, theaterNo, selectedDateString]);

    const handleTimeClick = (schedule) => {
        setSelectedTime(schedule.start);
        setSelectedHall(schedule.theaterNo);
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>시간</div>
            <div className={`${styles.timeList} ${styles.scrollable}`}>
                {schedules.map((schedule, index) => (
                    <div key={index} className={styles.timeItem} onClick={() => handleTimeClick(schedule)}>
                        <div className={`${styles.timeSection} ${selectedTime === schedule.start && selectedHall === schedule.theaterNo ? styles.selectedTime : ''}`}>
                            {new Date(schedule.start).toLocaleTimeString()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeSelection;
