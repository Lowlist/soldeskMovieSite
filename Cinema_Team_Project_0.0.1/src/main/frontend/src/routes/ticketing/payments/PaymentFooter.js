import React from 'react';
import styles from './style/PaymentFooter.module.css';

const PaymentFooter = ({ selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall, selectedSeats, totalAmount }) => {
    const selectedSeatsString = Array.isArray(selectedSeats) ? selectedSeats.join(', ') : selectedSeats;

    return (
        <div className={styles.footer}>
            <div className={styles.movieInfoContainer}>
                <div className={styles.selectedMovieSet}>
                    {selectedMovie.poster && (
                        <img src={selectedMovie.poster} alt={selectedMovie.title} className={styles.selectedMoviePoster} />
                    )}
                    <div className={styles.selectedMovieTitle}>
                        {selectedMovie.title}
                    </div>
                </div>
            </div>
            <div className={styles.totalInfo}>
                <div className={styles.seletedInfo}>
                    <div>극장 </div>
                    <div>일시 </div>
                    <div>상영관 </div>
                    <div>좌석 </div>
                    <div>인원 </div>
                </div>
                &emsp;
                <div className={styles.seletedInfo}>
                    <div>{selectedTheater}</div>
                    <div>{selectedDateString} {selectedTime}</div>
                    <div>{selectedHall}</div>
                    <div>{selectedSeatsString}</div>
                    <div>일반 {Array.isArray(selectedSeats) ? selectedSeats.length : selectedSeatsString.split(',').length}명</div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => alert('결제하기')}>결제하기</button>
            </div>
        </div>
    );
};

export default PaymentFooter;
