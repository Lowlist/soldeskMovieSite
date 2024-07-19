import { useEffect, useState } from 'react';
import styles from './style/MovieList.module.css';
import axios from 'axios';
import image from './style/image.png'; // 이미지 경로 불러오기
import all from './style/all.svg'
import twelve from './style/12.svg'
import fifteen from './style/15.svg'
import adult from './style/19.svg'

function MovieList() {

    let [data, setData] = useState(null);
    const stringLimit = (str, n) => { //글자수 제한 함수
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }; 

    useEffect(() => {
        const url = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&releaseDts=20240601&listCount=500&ServiceKey=BOC8E6E947M11OX4WO71";

        axios.get(url).then((response) => {
            setData(response.data.Data[0].Result);
        }).catch(error => {
            console.error("Error fetching data: ", error);
        })
    }, []);

    if (!data) {
        return <div>Loading...</div>; // 데이터가 로드되기 전 로딩 메시지 표시
    }

    return (
        <div className={styles.movieIndex}>
            {data.map((movie, index) => {
                let rating; //연령제한 이미지 넣기
                switch (movie.rating) {
                    case '전체관람가':
                        rating = <img src={all} alt='연령등급표' className={styles.ratingImge} />;
                        break;
                    case '12세관람가':
                    case '12세이상관람가':
                        rating = <img src={twelve} alt='연령등급표' className={styles.ratingImge} />;
                        break;
                    case '15세관람가':
                    case '15세이상관람가':
                        rating = <img src={fifteen} alt='연령등급표' className={styles.ratingImge} />;
                        break;
                    case '18세관람가(청소년관람불가)':
                    case '청소년관람불가':
                        rating = <img src={adult} alt='연령등급표' className={styles.ratingImge} />;
                        break;
                    default:
                        rating = <img src={all} alt='연령등급표' className={styles.ratingImge} />;
                }

                return (
                    <div key={index} className={styles.movieItem}>
                        {/* 영화목록 */}
                        <div className={styles.poster}>
                            {/* 영화 포스터 */}
                            {movie.posters ? (
                                <img src={movie.posters.split('|')[0]} alt="포스터" className={styles.poster} />
                            ) : (
                                <img src={image} alt="이미지" className={styles.poster} />
                            )}
                        </div>
                        <div className={styles.textContainer}>
                            {/* 영화 제목 */}
                            {rating} <p className={styles.title}>{stringLimit(movie.title, 10)}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default MovieList;