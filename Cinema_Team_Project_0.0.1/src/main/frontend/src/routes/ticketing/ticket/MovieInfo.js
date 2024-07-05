import React from 'react';
import styles from './style/MovieInfo.module.css';

const MovieInfo = ({ selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall }) => {
    return (
        <div className={styles.movieDetails}>
            <div>영화: {selectedMovie && selectedMovie.title}</div>
            {selectedMovie && selectedMovie.posters && <img src={selectedMovie.posters} alt={selectedMovie.title} className={styles.moviePoster} />}
            <div>극장: {selectedTheater}</div>
            <div>일시: {selectedDateString} {selectedTime}</div>
            <div>상영관: {selectedHall}</div>
        </div>
    );
};

export default MovieInfo;
