import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style/TheaterSelection.module.css';

const TheaterSelection = ({ selectedRegion, setSelectedRegion, selectedTheater, setSelectedTheater, setSelectedTheaterNo }) => {
    const [theaters, setTheaters] = useState([]);
    const regions = ['서울'];

    useEffect(() => {
        if (selectedRegion) {
            axios.get('/ticketing/theaters', { params: { area: selectedRegion } }) // 극장 데이터 불러오기
                .then(response => setTheaters(response.data)) // 집어 넣기!
                .catch(error => console.error("API 호출 오류: ", error));
        }
    }, [selectedRegion]);

    const handleTheaterSelect = (theater) => {
        setSelectedTheater(`${theater.name}(${theater.region})`);
        setSelectedTheaterNo(theater.no);
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>극장</div>
            <div className={styles.subHeader}></div>
            <div className={styles.theaterContainer}>
                <div className={`${styles.regionList} ${styles.scrollable}`}>
                    {/* 지역 선택 (서울밖에 없음) */}
                    {regions.map((region) => (
                        <div className={`${styles.regionItem} ${selectedRegion === region ? styles.selectedRegion : ''}`} onClick={() => setSelectedRegion(region)}>
                            {region}
                        </div>
                    ))}
                </div>
                <div className={`${styles.theaterList} ${styles.scrollable}`}>
                    {/* 극장 선택 하나뿐이지만 */}
                    {theaters.map((theater, index) => (
                        <div className={`${styles.theaterItem} ${selectedTheater === `${theater.name}(${theater.region})` ? styles.selectedTheater : ''}`} onClick={() => handleTheaterSelect(theater)}>
                            {`${theater.name}(${theater.region})`}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TheaterSelection;
