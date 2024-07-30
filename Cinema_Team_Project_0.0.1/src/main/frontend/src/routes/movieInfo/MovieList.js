import { useEffect, useState } from 'react';
import styles from './style/MovieList.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// 이미지 경로 불러오기
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
        const today = new Date();
        const date = new Date(today);
        date.setDate(today.getDate());
        const formattedDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        // const url = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&releaseDts=20240601&listCount=500&ServiceKey=BOC8E6E947M11OX4WO71";

        axios.get('/movie/main', { params: { releaseDate: formattedDate } }).then((response) => {
            const movies = response.data.Data[0].Result;
            // 포스터가 없거나 장르가 '에로'인 영화를 필터링
            const filteredMovies = movies.filter(movie => movie.posters !== "").filter(movie => movie.genre !== '에로') // '에로' 장르 제외
            setData(filteredMovies);
        }).catch(error => {
            console.error("Error fetching data: ", error);
        })
    }, []);

    if (!data) {
        return <div>Loading...?</div>; // 데이터가 로드되기 전 로딩 메시지 표시
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
                         <Link to={`/movie/info/${movie.DOCID}`} className={styles.link}>
                        {/* 영화목록 */}
                        <div className={styles.poster}>
                            {/* 영화 포스터 */}
                            <img src={movie.posters.split('|')[0]} alt="포스터" className={styles.poster} />
                        </div>
                        <div className={styles.textContainer}>
                            {/* 영화 제목 */}
                            {rating} <p className={styles.title}>{stringLimit(movie.title, 10)}</p>
                        </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default MovieList;