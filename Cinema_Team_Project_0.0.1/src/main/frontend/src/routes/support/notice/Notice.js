import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import styles from '../style/Support.module.css'; 
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { getNotices } from './NoticeApi';

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
        setNotices(data);
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
      <div className={styles.sTabWrap}>
        <ul className={styles.sTab}>
          <li className="on"><a href="/support/notice?type=movie&searchtext=" title="선택된 탭메뉴">영화</a></li>
          <li className=""><a href="/support/notice?type=store&searchtext=">스토어</a></li>
          <li className=""><a href="/support/notice?type=member&searchtext=">회원</a></li>
        </ul>
      </div>
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
          <tbody>
            {currentItems.map(notice => (
              <tr key={notice.id}>
                <td>{notice.id}</td>
                <td onClick={() => handleClick(notice.id)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
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
  );
}

export default Notice;