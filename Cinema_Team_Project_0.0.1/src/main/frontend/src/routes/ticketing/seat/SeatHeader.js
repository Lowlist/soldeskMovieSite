import React from 'react';
import styles from './style/Header.module.css';
import PeopleSelector from './PeopleSelector.js';
import MovieInfo from './MovieInfo.js';

const SeatHeader = ({ selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall, numPeople, handlePeopleChange }) => {
    return (
        <div className={styles.header}>
            <div className={styles.movieInfo}>
                <PeopleSelector numPeople={numPeople} handlePeopleChange={handlePeopleChange} />
                <div className={styles.info}>
                    <MovieInfo
                        selectedMovie={selectedMovie}
                        selectedTheater={selectedTheater}
                        selectedDateString={selectedDateString}
                        selectedTime={selectedTime}
                        selectedHall={selectedHall}
                    />
                </div>
            </div>
        </div>
    );
};

export default SeatHeader;
