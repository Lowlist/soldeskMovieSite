import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Goods from './Goods.js'
import SignUp from '../Sign/SignUp.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Shop() {
    return (
        <div className="store-main">
            헤더 추가예정
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">메인</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/signup">회원가입</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br/>

            <Routes path="/" >
                <Route path="/signup" element={<SignUp/>}></Route>
            </Routes>
        </div>
    )
}

export default Shop;