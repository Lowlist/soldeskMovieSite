import React from 'react';
import styles from './style/MovieSelection.module.css';

const MovieSelection = ({ movies, selectedMovie, setSelectedMovie }) => {
    return (
        <div className={styles.section}>
            <div className={styles.header}>영화</div>
            <div className={styles.subHeader}></div>
            <div className={`${styles.list} ${styles.scrollable}`}>
                {movies.map((movie, index) => (
                    <div
                        key={index}
                        className={`${styles.movieItem} ${selectedMovie === movie ? styles.selectedMovie : ''}`}
                        onClick={() => setSelectedMovie(movie)}
                    >
                        <img src={movie.posters} alt={movie.title} className={styles.moviePoster} />
                        <div>{movie.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSelection;
