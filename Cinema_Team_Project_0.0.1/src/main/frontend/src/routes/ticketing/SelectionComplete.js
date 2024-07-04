import React from 'react';
import styles from './style/SelectionComplete.module.css';

function SelectionComplete({ movie, theater, date, time, hall, audience, seatType, seatNumbers, ticketPrice, totalPrice }) {
    return (
        <div className={styles.container}>
            <div className={styles.movieInfo}>
                <div>영화: {movie}</div>
                <div>극장: {theater}</div>
                <div>일시: {date} {time}</div>
                <div>상영관: {hall}</div>
                <div>인원: {audience}</div>
            </div>
            <div className={styles.seatInfo}>
                <div>좌석명: {seatType}</div>
                <div>좌석번호: {seatNumbers}</div>
            </div>
            <div className={styles.priceInfo}>
                <div>일반: {ticketPrice} X {audience.split(' ')[1]}</div>
                <div>총금액: <span className={styles.totalPrice}>{totalPrice}</span></div>
            </div>
        </div>
    );
}

export default SelectionComplete;
