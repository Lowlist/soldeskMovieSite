import styles from './style/Info.module.css';

function Info() {
    return (
        <div className='contaniner'>
            <div className='contents'>
                <div className='select_main'>
                    <div className='sect-base-movie'>
                        <div className='box-imge'>
                        </div>
                        <div className='box-contents'>
                            <div className='title'>
                                영화제목
                            </div>
                            <div className='score'>
                                예매율 및 평점
                            </div>
                            <div className='spec'>
                                {/* 영화 상세정보 */}
                                감독
                                배우
                                날짜
                            </div>
                            <span className='ticketing'>
                                {/* 티켓예매 링크(버튼으로) */}
                            </span>
                        </div>
                    </div>
                    <div className='cols-content'>
                        {/* 하단 박스 */}
                        <div className='col-detail'>
                            <div className='sect-story-movie'>
                                줄거리
                            </div>
                            <div className='movie-detail-ad'>
                                하단광고
                            </div>
                            <div className='sect-trailer'>
                                트레일러 영상
                            </div>
                            <div className='sect-stillcut'>
                                스틸컷
                            </div>
                            <div className='sect-grade'>
                                {/* 하단 박스 안에 박스(로그인 평가 댓글 기능) */}
                                <div className='movie-grade'>
                                    영화 평점
                                </div>
                                <div className='real-rating'>
                                    평점작성
                                </div>
                                <div className='wrap-persongrade'>
                                    댓글기능
                                </div>
                            </div>
                        </div>
                        <div className='col-aside'>
                            {/* 오른쪽 광고창 */}
                            <div className='ad-externa'>
                               오른쪽 광고
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;