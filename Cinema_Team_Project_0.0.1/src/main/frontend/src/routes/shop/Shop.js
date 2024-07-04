import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Goods from './Goods.js'
import { useNavigate, Route, Routes } from 'react-router-dom';
import Notice from '../support/Notice.js';
import Support from '../support/Support.js';
import Question from '../support/Question.js';
import RealtimeQuestion from '../support/RealtimeQuestion.js';
function Shop() {
    let navigate = useNavigate(); 
    return (
        <div className="store-main">
            헤더 추가예정
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">스토어</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">패키지 상품</Nav.Link>
                        <Nav.Link href="#features">음식</Nav.Link>
                        <Nav.Link href="#pricing">음료</Nav.Link>
                        <Nav.Link href="#pricing">상품 소개</Nav.Link>
                        <Nav.Link onClick={()=>navigate('/support')}>고객센터</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Goods/>
            <br/>
            ㅁㄴㅇㄹ
        </div>
    )
}

export default Shop;