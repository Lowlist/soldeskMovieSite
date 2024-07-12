import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Shop from './routes/shop/Shop.js';
import Ticketing from './routes/ticketing/Ticketing.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { NavermapsProvider } from 'react-naver-maps';
import AddMapZoomChangedEvent from './component/KakaoMap.js';
// 내부 스테이트 들은 알아서 만들고 알아서 정리하세요!
// 공용스테이트같은 경우에는 redux사용해서 정리할것!
// 폴더같은 경우엔 routes/.../... 이런식으로 구성할것!

function App() {
  const [hello, setHello] = useState('');
  let [shoes] = useState();
  let [따봉,c] = useState(0);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get('/api/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error))
  }, []);
  

  return (
    <NavermapsProvider ncpClientId='iel7obr6sq'>
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><h4>Movie Site</h4></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/shop') }}>shop</Nav.Link>
            <Nav.Link onClick={() => { navigate('/ticketing') }}>ticketing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>
      <Routes>
      <Route path="/shop" element={
        <Shop></Shop>
      }/>
      <Route path="/ticketing" element={
        <Ticketing/>
      }/>
      </Routes>
    </div>
  </NavermapsProvider>
  );
}

export default App;