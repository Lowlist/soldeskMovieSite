import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style/Movie.module.css';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Movie() {
    const { DOCID } = useParams(); // useParams로 DOCID를 받아옴
    let [data, setData] = useState(null);

    useEffect(() => {
        // const url = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&movieId=k&movieSeq=36201&ServiceKey=BOC8E6E947M11OX4WO71";

        axios.get('/movie/info', { params: { DOCID } }).then((response) => {
            console.log(response.data); // 데이터 구조를 확인하기 위해 콘솔에 출력
            const data = response.data;

            // Data 배열이 비어있거나, 그 안에 Result 배열이 없는지 확인
            if (data && data.Data && data.Data.length > 0 && data.Data[0].Result && data.Data[0].Result.length > 0) {
                setData(data.Data[0].Result[0]);
            } else {
                console.error("Unexpected data structure or no data found");
            }
        }).catch(error => {
            console.error("Error fetching data: ", error);
        })
    }, []);

    if (!data) {
        return <div>Loading...</div>; // 데이터가 로드되기 전 로딩 메시지 표시
    }

    // 날짜 포맷 변경 함수 추가
    const formatDate = (dateString) => {
        if (dateString.length !== 8) return dateString; // 잘못된 형식 처리
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        return `${year}/${month}/${day}`;
    };

    // URL 변환 함수 추가
    const transformUrl = (url) => {
        return url.replace('/trailer/trailerPlayPop?pFileNm=', '/trailer/play/');
    };

    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.select_main}>
                    <div className={styles['sect-base-movie']}>
                        <div className={styles['box-imge']}>
                            <img src={data.posters.split('|')[0]} alt="포스터" />
                        </div>
                        <div className={styles['box-contents']}>
                            <div className={styles.title}>
                                {data.title}
                            </div>
                            {/* <div className={styles.score}>
                                예매율 및 평점
                            </div> */}
                            <div className={styles.spec}>
                                {/* 영화 상세정보 */}
                                감독: {data.directors.director.map(d => d.directorNm).join(', ')}<br />
                                배우: {data.actors.actor.map(a => a.actorNm).join(', ')}<br />
                                기본정보: {data.rating}/{data.runtime}분/{data.nation}<br />
                                개봉날짜: {formatDate(data.repRlsDate)}<br />
                                제작사: {data.company}
                            </div>
                            <span className={styles.ticketing}>
                                {/* 티켓예매 링크(버튼으로) */}
                                예매하기
                            </span>
                        </div>
                    </div>
                    <div className={styles['cols-content']}>
                        {/* 하단 박스 */}
                        <div className={styles['col-detail']}>
                            <div className={styles['sect-story-movie']}>
                                줄거리<br /> {data.plots.plot[0].plotText}
                            </div>
                            <div className={styles['sect-trailer']}>
                                트레일러 영상
                                <Carousel data-bs-theme="dark" interval={null}>
                                    {data.vods.vod.map((video, index) => (
                                        <Carousel.Item key={index}>
                                            <div className={styles['movie-trailer']}>
                                                <video className={styles['custom-video']} controls>
                                                    <source src={transformUrl(video.vodUrl)} type="video/mp4" />
                                                </video>
                                            </div>
                                            <div className={styles['movie-trailer-title']}>
                                                {video.vodClass}
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <div className={styles['sect-stillcut']}>
                                <h3>스틸컷</h3>
                                <div className={styles.stillcut}>
                                    {data.stlls.split('|').map((stll, index) => (
                                        <div key={index}>
                                            <img src={stll} alt={`스틸컷 ${index + 1}`} className={styles.stillcutImage} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles['sect-grade']}>
                                {/* 하단 박스 안에 박스(로그인 평가 댓글 기능) */}
                                <div className={styles['movie-grade']}>
                                    영화 평점
                                </div>
                                <div className={styles['real-rating']}>
                                    평점작성
                                </div>
                                <div className={styles['wrap-persongrade']}>
                                    댓글기능
                                </div>
                            </div>
                        </div>
                        <div className={styles['col-aside']}>
                            {/* 오른쪽 광고창 */}
                            <div className={styles['ad-externa']}>
                                오른쪽 광고
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;
