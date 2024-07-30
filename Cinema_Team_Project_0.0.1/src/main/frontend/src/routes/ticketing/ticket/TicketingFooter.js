import React from 'react';
import styles from './style/TicketingFooter.module.css';

const TicketingFooter = ({ selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall, handleSeatSelection }) => {
    const isButtonDisabled = !selectedMovie || !selectedTheater || !selectedDateString || !selectedTime;

    return (
        <div className={styles.footer}>
            <div className={`${styles.movieInfo} ${styles.movieInfoContainer}`}>
                <div className={styles.selectedMovieSet}>{selectedMovie && selectedMovie.poster && ( // 포스터가 있을 경우에만 이미지 표시
                    <img src={selectedMovie.poster} alt={selectedMovie.title} className={styles.selectedMoviePoster} />)}  
                    <div className={styles.selectedMovieTitle}>
                        {selectedMovie ? selectedMovie.title : ''}
                    </div> {/* 선택된 영화의 제목 표시 */}
                </div> 
            </div>
            <div className={styles.movieInfoContainer}>
                <div className={styles.movieInfo}>
                    <div>극장 </div>
                    <div>일시 </div>
                    <div>상영관 </div>
                    <div>인원 </div>
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
                <button 
                    className={styles.button} 
                    onClick={handleSeatSelection} 
                    disabled={isButtonDisabled}
                    style={{ backgroundColor: isButtonDisabled ? '#ccc' : '#d9534f', cursor: isButtonDisabled ? 'not-allowed' : 'pointer' }}
                >
                    좌석선택
                </button>
            </div>
        </div>
    );
};

export default TicketingFooter;
