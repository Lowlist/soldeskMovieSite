import React from 'react';
import styles from './style/DateSelection.module.css';

const DateSelection = ({ dates, selectedDate, setSelectedDate }) => {
    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const renderDates = () => {
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
                    {`${dayOfWeek}`} &nbsp; {`${day}`}
                </div>
            );
        });
    };

    const currentMonth = selectedDate ? selectedDate.toLocaleDateString('ko-KR', { month: 'long' }) : '';

    return (
        <div className={styles.section}>
            <div className={styles.header}>날짜</div>
            <div className={styles.currentMonth}>{currentMonth}</div>
            <div className={`${styles.calendar} ${styles.scrollable}`}>{renderDates()}</div>
        </div>
    );
};

export default DateSelection;
