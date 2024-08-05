import React, { useState, useEffect } from 'react';
import styles from './style/Support.module.css';
import { Link, Outlet, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import {MovieHeader} from '../main/Main.js';
import cinemaImage from '../../image/cinema.jpg';
import NoticeData from '../support/notice/NoticeData.js';

function Support() {
  let navigate = useNavigate();
  let location = useLocation();

  const isRootPath = location.pathname === '/support';

  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // 데이터 가져오기 예시
    fetch('/support/notice') // 실제 API 엔드포인트로 변경 필요
      .then(response => response.json())
      .then(data => setNotices(data));
  }, []);

  const getFirstNoticeTitle = () => {
    if (notices.length > 0) {
      return notices[0].noticeTitle;
    }
    return '공지사항이 없습니다';
  };

  const handleNoticeClick = (noticeNo) => {
    console.log(`Notice clicked: ${noticeNo}`);
  };

  return (
    <div className={styles.supportMain}>
      <div className={styles.nav}>
        <MovieHeader />
        <div className={styles.contents}>
          <div className={styles.colsContent}>
            <div className={styles.colAsideImageContainerWrapper}>
              <div className={styles.colAside}>
                <ul>
                  <li>
                    <Link to="notice">공지사항</Link>
                  </li>
                  <li>
                    <Link to="question">질문게시판</Link>
                  </li>
                  <li>
                    <Link to="question/realtime">실시간문의</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.imageContainer}>
                <img src={cinemaImage} alt="Support" />
              </div>
            </div>
            <div className={styles.colContent}>
              {isRootPath && (
                <>
                  <h2>고객센터 메인페이지</h2>
                  <p>공지사항이나 질문게시판에 궁금하신 내용이 없으면 실시간 문의로 질문해 주세요</p>
                  <button onClick={() => navigate('notice')}>공지사항으로 가기</button>
                  <button onClick={() => navigate('question')}>질문 게시판으로 가기</button>
                  <button onClick={() => navigate('question/realtime')}>실시간 문의로 가기</button>
                  <div className={styles['announcement-div']}>
                    <div className={styles['announcement-body']}>
                      <div className={styles['announcement-service']}>
                        <div className={styles['announcement-main']}>
                          <div className={styles['announcement-title']}>
                            <strong>공지사항</strong>
                          </div>
                          <div className={styles['announcement-list']}>
                           {getFirstNoticeTitle()}
                          </div>
                          <div className={styles['announcement-button']}>
                            <div className={styles['announcement-button-click']}>
                              더보기
                            </div>
                          </div>
                        </div>
                        <div className={styles['service-center']}>
                          <div className={styles['service-body']}>
                            <div className={styles['service-title']}>
                              <strong>고객센터</strong>
                            </div>
                            <div className={styles['service-subdiv']}>
                              <div className={styles['service-number']}>
                                1544-1122
                              </div>
                              <div className={styles['service-time']}>
                                고객센터 운영시간 {'('}평일 09:00 ~ 18:00{')'}
                              </div>
                              <div className={styles['service-info']}>
                                업무시간 외 자동응답 안내 가능합니다.
                              </div>
                            </div>
                          </div>
                          <div className={styles['service-footer']}>
                            <div className={styles['service-button-div']}>
                              <button className={styles['service-button']}>FAQ</button>
                            </div>
                            <div className={styles['service-button-div2']}>
                              <button className={styles['service-button2']}>1:1문의</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles['app-download']}>
                        <div className={styles['app-div']}>
                          <div className={styles['app-title']}>
                            <strong>앱 다운로드</strong>
                          </div>
                          <div className={styles['app-info']}>
                            씨네망가앱에서 더 편리하게 이용하세요
                          </div>
                          <div className={styles['app-qr']}>
                            대충 QR 이미지
                          </div>
                          <div className={styles['qr-info']}>
                            QR코드를 스캔하고
                            <br />
                            앱설치 페이지로 바로 이동하세요
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {!isRootPath && <Outlet />}
            </div>
          </div>
        </div>
      </div>
      <div className={styles['wrapper-footer']}>@Dream Ticket Office Corp.</div>
    </div>
  );
}

export default Support;