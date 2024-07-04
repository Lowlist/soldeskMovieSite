import React from 'react';
import PeopleSelector from './PeopleSelector';
import MovieInfo from './MovieInfo';
import styles from './style/Header.module.css';

const Header = ({ selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall, numPeople, handlePeopleChange }) => {
    return (
        <div className={styles.header}>
            <div className={styles.movieInfo}>
                <PeopleSelector numPeople={numPeople} handlePeopleChange={handlePeopleChange} />
                <MovieInfo
                    selectedMovie={selectedMovie}
                    selectedTheater={selectedTheater}
                    selectedDateString={selectedDateString}
                    selectedTime={selectedTime}
                    selectedHall={selectedHall}
                />
            </div>
        </div>
    );
};

export default Header;
