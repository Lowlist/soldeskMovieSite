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
      <div class="tabs">
        <nav class="tab-nav">
          <ul class="tab-list">
            <button>Tab #1</button>
            <button>Tab #2</button>
            <button>Tab #3</button>
          </ul>
        </nav>
      </div>
      <ul>
        {mockQuestions.map(question => (
          <li key={question.id}>
            <h3>{question.title}</h3>
            <p>{question.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question;