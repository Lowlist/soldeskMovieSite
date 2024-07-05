import React from 'react';
import styles from './style/Footer.module.css';

const Footer = ({ selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall, handleSeatSelection }) => {
    return (
        <div className={styles.footer} style={{ textAlign: 'left' }}>
            <div className={`${styles.movieInfo} ${styles.movieInfoContainer}`}>
                <div>영화: {selectedMovie}</div>
            </div>
            <div className={styles.movieInfoContainer}>
                <div className={styles.movieInfo}>
                    <div>극장: </div>
                    <div>일시: </div>
                    <div>상영관: </div>
                    <div>인원: </div>
                </div>
                &emsp;
                <div className={styles.movieInfo}>
                    <div>{selectedTheater}</div>
                    <div>{selectedDateString} {selectedTime}</div>
                    <div>{selectedHall}</div>
                    <div></div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleSeatSelection}>좌석선택</button>
            </div>
        </div>
    );
};

export default Footer;
