import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './style/Support.module.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const mockNotices = [
  { id: 1, title: '공지사항 1', content: '공지사항 내용 1', date: '2024-07-05', hit: '0' },
  { id: 2, title: '공지사항 2', content: '공지사항 내용 2', date: '2024-07-05', hit: '0' },
  { id: 3, title: '공지사항 3', content: '공지사항 내용 3', date: '2024-07-05', hit: '0' },
  { id: 4, title: '공지사항 4', content: '공지사항 내용 4', date: '2024-07-05', hit: '0' },
  { id: 5, title: '공지사항 5', content: '공지사항 내용 5', date: '2024-07-05', hit: '0' },
  { id: 6, title: '공지사항 6', content: '공지사항 내용 6', date: '2024-07-12', hit: '0' },
  { id: 7, title: '공지사항 7', content: '공지사항 내용 7', date: '2024-07-12', hit: '0' },
  { id: 8, title: '공지사항 8', content: '공지사항 내용 8', date: '2024-07-12', hit: '0' },
  { id: 9, title: '공지사항 9', content: '공지사항 내용 9', date: '2024-07-12', hit: '0' },
  { id: 10, title: '공지사항 10', content: '공지사항 내용 10', date: '2024-07-12', hit: '0' },
];

function Notice(){
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleClick = (id) => {
    navigate(`/support/notice/${id}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockNotices.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(mockNotices.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
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
            {currentItems.map(notice => (
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
        <ul className={styles.pageNumbers}>
          {pageNumbers.map(number => (
            <li key={number} className={number === currentPage ? styles.active : ''}>
              <button onClick={() => handlePageChange(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Notice;