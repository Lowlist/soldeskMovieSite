import React, { useState, useEffect } from 'react';
import styles from './style/TimeSelection.module.css';

const TimeSelection = ({ selectedTime, selectedHall, setSelectedTime, setSelectedHall }) => {
    const [tooltip, setTooltip] = useState({ show: false, time: '', endTime: '', x: 0, y: 0 });

    const halls = [
        {
            name: '2D 1관(일반)',
            times: Array.from({ length: 30 }, (_, i) => {
                const hours = 10 + Math.floor(i * 20 / 60);
                const minutes = (i * 20) % 60;
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            })
        },
        {
            name: '2D 2관(리클라이너)',
            times: Array.from({ length: 28 }, (_, i) => {
                const hours = 10 + Math.floor(i * 30 / 60);
                const minutes = (10 + i * 30) % 60;
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            })
        },
        {
            name: 'IMAX LASER 2D IMAX관',
            times: Array.from({ length: 8 }, (_, i) => {
                const hours = 9 + Math.floor(i * 120 / 60);
                const minutes = (i * 60) % 60;
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            })
        }
    ];

    const handleTimeClick = (time, hall) => {
        setSelectedTime(time);
        setSelectedHall(hall);
    };

    const isPastTime = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        const now = new Date();
        const timeDate = new Date();
        timeDate.setHours(hours, minutes, 0, 0);
        return timeDate < now;
    };

    const calculateEndTime = (time, duration) => {
        const [hours, minutes] = time.split(':').map(Number);
        const endTime = new Date();
        endTime.setHours(hours, minutes + duration, 0, 0);
        const endHours = endTime.getHours().toString().padStart(2, '0');
        const endMinutes = endTime.getMinutes().toString().padStart(2, '0');
        return `${endHours}:${endMinutes}`;
    };

    const handleMouseOver = (event, time, duration) => {
        const endTime = calculateEndTime(time, duration);
        const tooltipY = event.currentTarget.offsetTop - 30; // 버튼 위에 보이게 조정
        const tooltipX = event.currentTarget.offsetLeft;
        setTooltip({ show: true, time, endTime, x: tooltipX, y: tooltipY });
    };

    const handleMouseOut = () => {
        setTooltip({ show: false, time: '', endTime: '', x: 0, y: 0 });
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>시간</div>
            <div className={`${styles.timeList} ${styles.scrollable}`}>
                {halls.map((hall, index) => {
                    const availableTimes = hall.times.filter(time => !isPastTime(time));
                    if (availableTimes.length === 0) {
                        return null; // 해당 홀에 이용 가능한 시간이 없으면 표시하지 않음
                    }
                    return (
                        <div key={index} className={styles.timeHall}>
                            <hr className={styles.hallLine}></hr>
                            <div className={styles.timeHallHeader}>{hall.name}</div>
                            <div className={styles.timeRow}>
                                {availableTimes.map((time, idx) => (
                                    <div key={idx}
                                        className={styles.timeItem}
                                        onClick={() => handleTimeClick(time, hall.name)}
                                        onMouseOver={(e) => handleMouseOver(e, time, 120)} // 예시로 120분을 종료 시간으로 계산
                                        onMouseOut={handleMouseOut}>
                                        <div className={`${styles.timeSection} ${selectedTime === time && selectedHall === hall.name ? styles.selectedTime : ''}`}>
                                            {time}
                                        </div>
                                        <div className={styles.remainingSeats}>111석</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
            {tooltip.show && (
                <div className={styles.tooltip} style={{ top: tooltip.y, left: tooltip.x }}>
                    종료 {tooltip.endTime}
                </div>
            )}
        </div>
    );
};

export default TimeSelection;
