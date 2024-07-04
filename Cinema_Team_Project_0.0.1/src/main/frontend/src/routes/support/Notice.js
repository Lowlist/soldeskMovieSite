import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './style/Support.module.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const mockNotices = [
  { id: 1, title: '공지사항 1', content: '공지사항 내용 1' },
  { id: 2, title: '공지사항 2', content: '공지사항 내용 2' },
  { id: 3, title: '공지사항 3', content: '공지사항 내용 3' },
];

function Notice(){
  let navigate = useNavigate();
  return(
    <div>
      <h2>공지사항</h2>
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
        {mockNotices.map(notice => (
          <li key={notice.id}>
            <h3>{notice.title}</h3>
            <p>{notice.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notice;