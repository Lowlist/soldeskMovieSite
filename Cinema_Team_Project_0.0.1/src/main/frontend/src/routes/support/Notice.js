import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './style/Support.module.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const mockNotices = [
  { id: 1, title: '공지사항 1', content: '공지사항 내용 1', date: '2024-07-05', hit: '0' },
  { id: 2, title: '공지사항 2', content: '공지사항 내용 2', date: '2024-07-05', hit: '0' },
  { id: 3, title: '공지사항 3', content: '공지사항 내용 3', date: '2024-07-05', hit: '0' },
  { id: 4, title: '공지사항 4', content: '공지사항 내용 4', date: '2024-07-05', hit: '0' },
  { id: 5, title: '공지사항 5', content: '공지사항 내용 5', date: '2024-07-05', hit: '0' },
];

function Notice(){
  let navigate = useNavigate();
  return(
    <div>
      <h2>공지사항</h2>
      <div className={styles.sTabWrap}>
        <ul className={styles.sTab}>
					<li class="on"><a href="/support/news/default.aspx?type=&amp;searchtext=" title="선택된 탭메뉴">전체</a></li>
					<li class=""><a href="/support/news/default.aspx?type=1&amp;searchtext=">시스템점검</a></li>
					<li class=""><a href="/support/news/default.aspx?type=2&amp;searchtext=">극장</a></li>
				</ul>
      </div>
      <div className={styles.tableArea}>
      <table>
          <thead>
            <tr>
              <td>
                글번호
              </td>
              <td>
                제목
              </td>
              <td>
                날짜
              </td>
              <td>
                조회수
              </td>
            </tr>
          </thead>
          <tbody>
            {mockNotices.map(notice => (
              <tr key={notice.id}>
                <td>{notice.id}</td>
                <td onClick={() => navigate(`/support/notice/${notice.id}`)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  {notice.title}
                </td>
                <td>{notice.date}</td>
                <td>{notice.hit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.paging}>
          <p>페이징 블록</p>
      </div>
    </div>
  )
}

export default Notice;