import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import data from './data';
import style from './style/Goods.module.css';
import PackageGoods from './PackageGoods';
import DrinkFood from './DrinkFood';
import GiftTicket from './GiftTicket';


function Goods() {
    let [shoes] = useState(data);
    return (
        <div>
            <div className={style.goodsMain}>
                <Container>
                    {/* Navbar Start */}
                    <Navbar bg="light" data-bs-theme="light" className={style.navBar}>
                        <Container>
                            <Navbar.Brand href="#home">스토어</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">패키지 상품</Nav.Link>
                                <Nav.Link href="#features">음식</Nav.Link>
                                <Nav.Link href="#pricing">할인권</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    {/* Navbar End */}

                    {/* PackageGoods Start */}
                     
                    <PackageGoods/>
                    
                    {/* PackageGoods End */}

                    <div className={style.goodsLine}>
                        
                        {/* LeftBox Start */}
                        <DrinkFood/>
                        {/* LeftBox End */}

                        {/* RightBox Start */}
                        <GiftTicket/>
                        {/* RightBox End */}

                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Goods;