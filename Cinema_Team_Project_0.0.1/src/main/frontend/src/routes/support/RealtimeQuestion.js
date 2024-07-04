import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './style/Support.module.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

function RealtimeQuestion(){
  let navigate = useNavigate();
  return(
    <div>
      <h2>실시간 문의 페이지</h2>
      {/* 실시간 문의 내용 */}
    </div>
  )
}

export default RealtimeQuestion;