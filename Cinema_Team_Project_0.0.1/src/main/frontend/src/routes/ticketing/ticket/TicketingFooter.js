import React from 'react';
import styles from './style/TicketingFooter.module.css';

const TicketingFooter = ({ selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall, handleSeatSelection }) => {
    const isButtonDisabled = !selectedMovie || !selectedTheater || !selectedDateString || !selectedTime;

    return (
        <div className={styles.footer}>
            {/* 선택한 영화 포스터와 제목 불러오기 */}
            <div className={`${styles.movieInfo} ${styles.movieInfoContainer}`}>
                <div className={styles.selectedMovieSet}>{selectedMovie && selectedMovie.poster && (
                    <img src={selectedMovie.poster} alt={selectedMovie.title} className={styles.selectedMoviePoster} />)}  
                    <div className={styles.selectedMovieTitle}>
                        {selectedMovie ? selectedMovie.title : ''}
                    </div> 
                </div> 
            </div>
            {/* 나머지 선택 정보 */}
            <div className={styles.movieInfoContainer}>
                <div className={styles.movieInfo}>
                    <div>극장 </div>
                    <div>일시 </div>
                    <div>상영관 </div>
                    <div>인원 </div>
                </div>
                &emsp; {/* 줄 맞춤을 위한 띄어쓰기 */}
                <div className={styles.movieInfo}>
                    <div>{selectedTheater}</div>
                    <div>{selectedDateString} {selectedTime}</div>
                    <div>{selectedHall}</div>
                    <div></div> {/* 인원 칸인데 이건 좌석 선택 넘어가서 */}
                </div>
            </div>
            {/* 좌석 선택 버튼 - 전부 선택 했을때만 활성화 */}
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleSeatSelection} disabled={isButtonDisabled} style={{ backgroundColor: isButtonDisabled ? '#ccc' : '#d9534f', cursor: isButtonDisabled ? 'not-allowed' : 'pointer' }}>
                    좌석선택
                </button>
            </div>
        </div>
    );
};

export default TicketingFooter;
