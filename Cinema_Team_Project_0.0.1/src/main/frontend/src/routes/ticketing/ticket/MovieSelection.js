import React from 'react';
import styles from './style/MovieSelection.module.css';

const MovieSelection = ({ movies, selectedMovie, setSelectedMovie }) => {

    const handleMovieClick = (movie) => {
        setSelectedMovie({
            title: movie.title,
            poster: movie.poster,
        });
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>영화</div>
            <div className={styles.subHeader}></div>
            <div className={`${styles.list} ${styles.scrollable}`}>
                {movies.map((movie, index) => (
                    <div
                        key={index}
                        className={`${styles.movieItem} ${selectedMovie === movie ? styles.selectedMovie : ''}`}
                        onClick={() => handleMovieClick(movie)}
                    >
                        <img src={movie.poster} alt={movie.title} className={styles.moviePoster} width={130}/>
                        <div className={styles.title}>{movie.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSelection;
