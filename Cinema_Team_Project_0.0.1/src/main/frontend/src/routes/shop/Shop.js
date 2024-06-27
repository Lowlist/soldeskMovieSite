import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Shop() {
    return (
        <div className="store-main">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">스토어</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">패키지 상품</Nav.Link>
                        <Nav.Link href="#features">음식</Nav.Link>
                        <Nav.Link href="#pricing">음료</Nav.Link>
                        <Nav.Link href="#pricing">상품 소개</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                ㅁㄴㅇㄹ
                <Row>
                    <Col>
                    ㅁㄴㅇㄹ
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Shop;