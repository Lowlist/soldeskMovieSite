import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from '../style/Support.module.css'; 
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { getNotices } from './NoticeApi';
import NoticeData from './NoticeData';

function Notice() {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getNotices();
        setNotices(data.reverse());
        setLoading(false);
      } catch (err) {
        console.error('Error fetching notices:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const handleClick = (id) => {
    navigate(`/support/notice/${id}`);
  };

  const handleCreateNotice = () => {
    navigate('/support/notice/write');
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = notices.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(notices.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>공지사항</h2>
      <div className={styles.tableArea}>
        <table>
          <thead>
            <tr>
              <td>글번호</td>
              <td>제목</td>
              <td>날짜</td>
              <td>조회수</td>
            </tr>
          </thead>
          <NoticeData notices={currentItems} onNoticeClick={handleClick} />
        </table>
      </div>
      <div className={styles.paging}>
        <ul className={styles.pageNumbers}>
          {pageNumbers.map(number => (
            <li key={number} className={number === currentPage ? styles.active : ''}>
              <button onClick={() => handlePageChange(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleCreateNotice}>공지사항 추가</button>
    </div>
  );
}

export default Notice;