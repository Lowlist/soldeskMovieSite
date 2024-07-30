import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './style/Support.module.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const mockQuestions = [
  { id: 1, title: '질문 1', content: '질문 내용 1', date: '2024-07-05', hit: '0' },
  { id: 2, title: '질문 2', content: '질문 내용 2', date: '2024-07-05', hit: '0' },
  { id: 3, title: '질문 3', content: '질문 내용 3', date: '2024-07-05', hit: '0' },
  { id: 4, title: '질문 4', content: '질문 내용 4', date: '2024-07-05', hit: '0' },
  { id: 5, title: '질문 5', content: '질문 내용 5', date: '2024-07-05', hit: '0' },
  { id: 6, title: '질문 6', content: '질문 내용 6', date: '2024-07-12', hit: '0' },
  { id: 7, title: '질문 7', content: '질문 내용 7', date: '2024-07-12', hit: '0' },
  { id: 8, title: '질문 8', content: '질문 내용 8', date: '2024-07-12', hit: '0' },
  { id: 9, title: '질문 9', content: '질문 내용 9', date: '2024-07-12', hit: '0' },
  { id: 10, title: '질문 10', content: '질문 내용 10', date: '2024-07-12', hit: '0' },
];

function Question(){
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
  const currentItems = mockQuestions.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(mockQuestions.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return(
    <div>
      <h2>질문 게시판</h2>
      <div className={styles.sTabWrap}>
        <ul className={styles.sTab}>
          <li class="on"><a href="/support/question?type=movie&searchtext=" title="선택된 탭메뉴">영화</a></li>
          <li class=""><a href="/support/question?type=store&searchtext=">스토어</a></li>
          <li class=""><a href="/support/question?type=member&searchtext=">회원</a></li>
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
            {currentItems.map(question => (
              <tr key={question.id}>
                <td>{question.id}</td>
                <td onClick={() => navigate(`/support/question/${question.id}`)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  {question.title}
                </td>
                <td>{question.date}</td>
                <td>{question.hit}</td>
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

export default Question;