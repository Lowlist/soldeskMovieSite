import React from 'react';
import styles from './style/MovieInfo.module.css';

const MovieInfo = ({ selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall }) => {
    return (
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
                <div>{selectedHall}</div>
            </div>
        </div>
        
    );
};

export default MovieInfo;
