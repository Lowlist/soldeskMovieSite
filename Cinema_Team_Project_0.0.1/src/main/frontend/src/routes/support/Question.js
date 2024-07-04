import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './style/Support.module.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const mockQuestions = [
  { id: 1, title: '질문 1', content: '질문 내용 1' },
  { id: 2, title: '질문 2', content: '질문 내용 2' },
  { id: 3, title: '질문 3', content: '질문 내용 3' },
];

function Question(){
  let navigate = useNavigate();
  return(
    <div>
      <h2>질문 게시판</h2>
      <div className={styles.sTabWrap}>
        <ul className={styles.sTab}>
					<li class="on"><a href="/support/news/default.aspx?type=&amp;searchtext=" title="선택된 탭메뉴">전체</a></li>
					<li class=""><a href="/support/news/default.aspx?type=1&amp;searchtext=">시스템점검</a></li>
					<li class=""><a href="/support/news/default.aspx?type=2&amp;searchtext=">극장</a></li>
				</ul>
      </div>
      <div className={styles.tableArea}>
        <ul>
          {mockQuestions.map(notice => (
            <li key={notice.id}>
              <h3>{notice.title}</h3>
              <p>{notice.content}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.paging}>
          <p>페이징 블록</p>
      </div>
    </div>
  )
}

export default Question;