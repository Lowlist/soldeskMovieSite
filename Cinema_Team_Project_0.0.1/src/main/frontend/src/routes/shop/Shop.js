import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Goods from './Goods.js'
function Shop() {
    return (
        <div className="store-main">
            헤더 추가예정
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">스토어</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">패키지 상품</Nav.Link>
                        <Nav.Link href="#features">음식</Nav.Link>
                        <Nav.Link href="#pricing">할인권</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Goods/>
            <br/>
        </div>
    )
}

export default Shop;