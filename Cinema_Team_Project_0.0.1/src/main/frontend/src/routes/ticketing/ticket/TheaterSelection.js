import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style/TheaterSelection.module.css';

const TheaterSelection = ({ selectedRegion, setSelectedRegion, selectedTheater, setSelectedTheater, setSelectedTheaterNo }) => { // 여기서 setSelectedTheaterNo로 수정
    const [theaters, setTheaters] = useState([]);
    const regions = [ '서울'];

    useEffect(() => {
        if (selectedRegion) {
            axios.get('/ticketing/theaters', { params: { area: selectedRegion } })
                .then(response => setTheaters(response.data))
                .catch(error => console.error("API 호출 오류: ", error));
        }
    }, [selectedRegion]);

    const handleTheaterSelect = (theater) => {
        setSelectedTheater(`${theater.name}(${theater.region})`);
        setSelectedTheaterNo(theater.no); // 여기도 setSelectedTheaterNo로 수정
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>극장</div>
            <div className={styles.subHeader}></div>
            <div className={styles.theaterContainer}>
                <div className={`${styles.regionList} ${styles.scrollable}`}>
                    {regions.map((region) => (
                        <div
                            key={region}
                            className={`${styles.regionItem} ${selectedRegion === region ? styles.selectedRegion : ''}`}
                            onClick={() => setSelectedRegion(region)}
                        >
                            {region}
                        </div>
                    ))}
                </div>
                <div className={`${styles.theaterList} ${styles.scrollable}`}>
                    {theaters.map((theater, index) => (
                        <div
                            key={index}
                            className={`${styles.theaterItem} ${selectedTheater === `${theater.name}(${theater.region})` ? styles.selectedTheater : ''}`}
                            onClick={() => handleTheaterSelect(theater)}
                        >
                            {`${theater.name}(${theater.region})`}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TheaterSelection;
