import { useEffect, useState } from 'react';
import styles from './style/Info.module.css';
import axios from 'axios';

function Info() {

    let [data, setDate] = useState(null);

    useEffect(() => {
        const url = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&movieId=k&movieSeq=36201&ServiceKey=BOC8E6E947M11OX4WO71";

        axios.get(url).then((response) => {
            setDate(response.data.Data[0].Result[0]);
        }).catch(error => {
            console.error("Error fetching data: ", error);
        })
    }, []);

    if (!data) {
        return <div>Loading...</div>; // 데이터가 로드되기 전 로딩 메시지 표시
    }

    return (
        <div className={styles.contaniner}>
            <div className={styles.contents}>
                <div className={styles.select_main}>
                    <div className={styles['sect-base-movie']}>
                        <div className={styles['box-imge']}>
                            <img src={[data.posters.split('|')[0]]}></img>
                        </div>
                        <div className={styles['box-contents']}>
                            <div className={styles.title}>
                                {data.title}
                            </div>
                            <div className={styles.score}>
                                예매율 및 평점
                            </div>
                            <div className={styles.spec}>
                                {/* 영화 상세정보 */}
                                감독: {data.directors.director.map(d => d.directorNm).join(', ')}<br />
                                배우: {data.actors.actor.map(a => a.actorNm).join(', ')}<br />
                                날짜: {data.repRlsDate}
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
                                {/* {data.vods.vod.map((video,index)=>{
                                    <div key={index}>
                                        <video>
                                            <source src={video.vodUrl} type='video/mp4'></source>
                                        </video>
                                    </div>
                                })} */}
                                <video>
                                    <source src={data.vods.vod[0].vodUrl}></source>
                                </video>

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


export default Info;