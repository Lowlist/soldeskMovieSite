import React from 'react';
import styles from './style/SelectionComplete.module.css';

function SelectionComplete({ movie, theater, date, time, hall, audience, seatType, seatNumbers, ticketPrice, totalPrice }) {
    return (
        <div className={styles.container}>
            <div className={styles.movieInfoContainer}>
                <div className={styles.selectedMovieSet}>
                    {movie.poster && (
                        <img src={movie.poster} alt={movie.title} className={styles.selectedMoviePoster} />
                    )}
                    <div className={styles.selectedMovieTitle}>
                        {movie.title}
                    </div>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoSection}>
                    <div className={styles.infoTitle}>극장:</div>
                    <div className={styles.infoValue}>{theater}</div>
                </div>
                <div className={styles.infoSection}>
                    <div className={styles.infoTitle}>일시:</div>
                    <div className={styles.infoValue}>{date} {time}</div>
                </div>
                <div className={styles.infoSection}>
                    <div className={styles.infoTitle}>상영관:</div>
                    <div className={styles.infoValue}>{hall}관</div>
                </div>
                <div className={styles.infoSection}>
                    <div className={styles.infoTitle}>인원:</div>
                    <div className={styles.infoValue}>{audience}</div>
                </div>
            </div>
            <div className={styles.seatInfo}>
                <div className={styles.infoSection}>
                    <div className={styles.infoTitle}>좌석명:</div>
                    <div className={styles.infoValue}>{seatType}</div>
                </div>
                <div className={styles.infoSection}>
                    <div className={styles.infoTitle}>좌석번호:</div>
                    <div className={styles.infoValue}>{seatNumbers}</div>
                </div>
            </div>
            <div className={styles.priceInfo}>
                <div className={styles.infoSection}>
                    <div className={styles.infoValue}>{ticketPrice} X {audience.split(' ')[1]}</div>
                </div>
                <div className={styles.infoSection}>
                    <div className={styles.totalPrice}>{totalPrice}</div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>결제</button>
            </div>
        </div>
    );
}

export default SelectionComplete;
