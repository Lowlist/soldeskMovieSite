import React from 'react';
import styles from './style/TheaterSelection.module.css';

const TheaterSelection = ({ selectedRegion, setSelectedRegion, theaters, selectedTheater, setSelectedTheater }) => {
    const regions = ['전체', '서울', '경기'];

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
                            className={`${styles.theaterItem} ${selectedTheater === theater ? styles.selectedTheater : ''}`}
                            onClick={() => setSelectedTheater(theater)}
                        >
                            {theater}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TheaterSelection;
