import React from 'react';
import styles from './style/Support.module.css';
import { Link, Outlet, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import {MovieHeader} from '../main/Main.js';

function Support(){
    let navigate = useNavigate();
    let location = useLocation();

    const isRootPath = location.pathname === '/support';
    return(
        <div className={styles.supportMain}>
        <div className={styles.nav}>
          <MovieHeader />
          <div className={styles.contents}>
            <div className={styles.colsContent}>
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
              <div className={styles.colContent}>
                {isRootPath && (
                  <>
                    <h2>고객센터 메인페이지</h2>
                    <p>공지사항이나 질문게시판에 궁금하신 내용이 없으면 실시간 문의로 질문해 주세요</p>
                    <button onClick={() => navigate('notice')}>공지사항으로 가기</button>
                    <button onClick={() => navigate('question')}>질문 게시판으로 가기</button>
                    <button onClick={() => navigate('question/realtime')}>실시간 문의로 가기</button>
                  </>
                )}
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Support;