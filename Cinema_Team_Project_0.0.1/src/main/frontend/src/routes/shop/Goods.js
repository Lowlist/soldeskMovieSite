import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import data from './data';
import DrinkFood from './DrinkFood';
import GiftTicket from './GiftTicket';
import PackageGoods from './PackageGoods';
import style from './style/Goods.module.css';

//Store 컴포넌트
function Goods() {
    let [shoes] = useState(data);
    let navigate = useNavigate();
    return (
        <div>
            <div className={style.goodsMain}>
                <Container>
                    {/* Navbar Start */}
                    <Navbar bg="light" data-bs-theme="light" className={style.navBar}>
                        <Container>
                            <Navbar.Brand onClick={ () => navigate('/store') }>스토어</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link onClick={ () => navigate('package') }>패키지 상품</Nav.Link>
                                <Nav.Link onClick={ () => navigate('food') }>음식</Nav.Link>
                                <Nav.Link onClick={ () => navigate('giftTicket') }>할인권</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    {/* Navbar End */}

                    {/* PackageGoods Start */}
                     
                    {  <PackageGoods/> }
                    
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