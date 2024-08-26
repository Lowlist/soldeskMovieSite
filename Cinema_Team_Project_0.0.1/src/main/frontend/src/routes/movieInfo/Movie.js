import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style/Movie.module.css';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Movie() {
    const { DOCID } = useParams(); // useParams로 DOCID를 받아옴
    let [data, setData] = useState(null);
    // 트레일러 데이터를 파싱하는 함수
    const parseTrailerData = (trailerData) => {
        if (!trailerData) return []; // 트레일러 데이터가 없으면 빈 배열 반환

        // " | "로 각 예고편 구분
        return trailerData.split(" | ").map((item) => {
            // "]: "로 제목과 URL 구분
            const [title, url] = item.split("]: ");

            // 만약 URL이 없거나 title과 URL이 유효하지 않다면 null 반환
            if (!title || !url) return null;

            return {
                vodClass: title.trim() + "]", // 제목에 ']'를 다시 추가
                vodUrl: url.trim(), // URL 양쪽의 공백 제거
            };
        }).filter(Boolean); // null 값 필터링
    };

    useEffect(() => {
        axios.get('/movie/info', { params: { DOCID: DOCID } })
            .then((response) => {
                console.log(response.data); // 데이터 구조 확인
                const movieData = response.data;
                if (movieData) {
                    setData(movieData);
                } else {
                    console.error("영화 데이터를 불러오지 못했습니다.");
                    setData(null); // 데이터가 없을 때 null로 설정하여 로딩 상태를 끝냄
                }
            })
            .catch((error) => {
                console.error("데이터 로딩 중 오류 발생:", error);
            });
    }, [DOCID]);

    if (!data) {
        return <div>Loading...</div>; // 데이터가 로드되기 전 로딩 메시지 표시
    }

    // 날짜 포맷 변경 함수 추가
    const formatDate = (dateString) => {
        if (!dateString || dateString.length !== 8) return dateString; // 잘못된 형식 처리
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        return `${year}/${month}/${day}`;
    };
    const timeCutData = formatDate(data.releaseDate.split("T")[0]);
    const lastFotmatDate = formatDate(timeCutData.replace(/-/g, ''));

    // URL 변환 함수 추가
    const transformUrl = (url) => {
        return url.replace('/trailer/trailerPlayPop?pFileNm=', '/trailer/play/');
    };
    const posterUrl = data.poster.includes("|") ? data.poster.split("|")[0] : data.poster;



    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.select_main}>
                    <div className={styles['sect-base-movie']}>
                        <img
                            src={posterUrl}
                            alt="포스터"
                            className={styles['box-poster']}
                        />
                        <div className={styles['box-contents']}>
                            <div className={styles.title}>
                                {data.title}
                            </div>
                            {/* <div className={styles.score}>
                                예매율 및 평점
                            </div> */}
                            <div className={styles.spec}>
                                {/* 영화 상세정보 */}
                                감독: {data.director}<br />
                                배우: {data.actor}<br />
                                기본정보: {data.rating}/{data.runtime}분/{data.nation}<br />
                                개봉날짜: {lastFotmatDate}<br />
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
                                줄거리<br /> {data.content}
                            </div>
                            <div className={styles['sect-trailer']}>
                                트레일러 영상
                                <Carousel data-bs-theme="dark" interval={null}>
                                    {parseTrailerData(data.video).map((video, index) => (
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
                                    {data.stlls ? data.stlls.split('|').map((stll, index) => (
                                        <div key={index}>
                                            <img src={stll} alt={`스틸컷 ${index + 1}`} className={styles.stillcutImage} />
                                        </div>
                                    )) : <div></div>}
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
