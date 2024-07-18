import React from 'react';
import styles from './style/Header.module.css';

const Header = ({ selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall, numPeople, handlePeopleChange }) => {
    return (
        <div className={styles.header}>
            <div className={styles.movieInfo}>
                <div className={styles.peopleSelector}>
                    <button onClick={() => handlePeopleChange(-1)}>-</button>
                    <span>{numPeople}</span>
                    <button onClick={() => handlePeopleChange(1)}>+</button>
                </div>
                <div className={styles.info}>
                    <div>
                        <div>영화: {selectedMovie ? selectedMovie.title : ''}</div>
                        <div>극장: {selectedTheater ? selectedTheater : ''}</div> {/* 상영관 이름 표시 */}
                        <div>일시: {selectedDateString} {selectedTime}</div>
                        <div>상영관: {selectedHall ? selectedHall : ''}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
