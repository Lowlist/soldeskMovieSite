import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from '../style/Support.module.css'; 
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { getQuestions } from './QuestionApi'

function Question() {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data.reverse());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCreateQuestion = () => {
    navigate('/support/question/write');
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(questions.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>질문 게시판</h2>
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
            {currentItems.map((question) => (
              <tr key={question.questionNo}>
                <td>{question.questionNo}</td>
                <td onClick={() => navigate(`/support/question/${question.questionNo}`)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  {question.questionTitle}
                </td>
                <td>{new Date(question.createdAt).toLocaleDateString()}</td>
                <td>{question.questionHit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.paging}>
        <ul className={styles.pageNumbers}>
          {pageNumbers.map((number) => (
            <li key={number} className={number === currentPage ? styles.active : ''}>
              <button onClick={() => handlePageChange(number)}>{number}</button>
            </li>
          ))}
        </ul>
        </div>
        <button onClick={handleCreateQuestion}>질문 추가</button>
    </div>
  );
}
export default Question;