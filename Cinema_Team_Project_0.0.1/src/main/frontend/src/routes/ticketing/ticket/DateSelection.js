import React from 'react';
import styles from './style/DateSelection.module.css';

const DateSelection = ({ dates, selectedDate, setSelectedDate }) => {
    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    // 날짜 선택 불러오기
    const renderDates = () => {
        return dates.map((date, index) => {
            const day = date.toLocaleDateString('ko-KR', { day: '2-digit' }); // 2자리로 표시 (8일이면 08일로)
            const dayOfWeek = date.toLocaleDateString('ko-KR', { weekday: 'short' }); // 월 화 수 목 금 토 일 한글자로 짧게
            const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

            return (
                <div className={`${styles.calendarItem} ${isSelected ? styles.selectedDate : ''}`} onClick={() => handleDateClick(date)}>
                    {`${dayOfWeek}`} &nbsp; {`${day}`}
                </div>
            );
        });
    };

    // 선택하면 2024.8.8.(목) 이 형식으로 변경되서 표시
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
