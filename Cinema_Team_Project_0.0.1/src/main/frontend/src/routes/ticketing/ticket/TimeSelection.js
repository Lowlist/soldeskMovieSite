import React from 'react';
import styles from './style/TimeSelection.module.css';

const TimeSelection = ({ selectedTime, selectedHall, setSelectedTime, setSelectedHall }) => {
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
                ))}
            </div>
        </div>
    );
};

export default TimeSelection;
