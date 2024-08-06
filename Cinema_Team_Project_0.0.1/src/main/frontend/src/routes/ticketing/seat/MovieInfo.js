import React from 'react';
import styles from './style/MovieInfo.module.css';

const MovieInfo = ({ selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall }) => {
    return (
        // 아까 선택한 값들 그대로 표시
        <div className={styles.movieDetails}>
            <div>
                <div>영화 : </div>
                <div>극장 : </div>
                <div>일시 : </div>
                <div>상영관 : </div>
            </div>
            <div className={styles.movieDetailsInfo}>
                <div> {selectedMovie && selectedMovie.title}</div>
                {selectedMovie && selectedMovie.posters && <img src={selectedMovie.posters} alt={selectedMovie.title} className={styles.moviePoster} />}
                <div> {selectedTheater}</div>
                <div>{selectedDateString} {selectedTime}</div>
                <div>{selectedHall}관</div>
            </div>
        </div>
        
    );
};

export default MovieInfo;
