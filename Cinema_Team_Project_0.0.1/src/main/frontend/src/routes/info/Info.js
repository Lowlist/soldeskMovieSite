import styles from './style/Info.module.css';

function Info() {
    return (
        <div className={styles.contaniner}>
            <div className={styles.contents}>
                <div className={styles.select_main}>
                    <div className={styles['sect-base-movie']}>
                        <div className={styles['box-imge']}>
                        </div>
                        <div className={styles['box-contents']}>
                            <div className={styles.title}>
                                영화제목
                            </div>
                            <div className={styles.score}>
                                예매율 및 평점
                            </div>
                            <div className={styles.spec}>
                                {/* 영화 상세정보 */}
                                감독
                                배우
                                날짜
                            </div>
                            <span className={styles.ticketing}>
                                {/* 티켓예매 링크(버튼으로) */}
                            </span>
                        </div>
                    </div>
                    <div className={styles['cols-content']}>
                        {/* 하단 박스 */}
                        <div className={styles['col-detail']}>
                            <div className={styles['sect-story-movie']}>
                                줄거리
                            </div>
                            <div className={styles['movie-detail-ad']}>
                                하단광고
                            </div>
                            <div className={styles['sect-trailer']}>
                                트레일러 영상
                            </div>
                            <div className={styles['sect-stillcut']}>
                                스틸컷
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
