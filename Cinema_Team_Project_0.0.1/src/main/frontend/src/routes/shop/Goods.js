import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import DrinkFood from './DrinkFood';
import GiftTicket from './GiftTicket';
import PackageGoods from './PackageGoods';
import style from './style/Goods.module.css';
import { useState } from 'react';

//Store 컴포넌트
function Goods() {
    let id = useLocation();
    let navigate = useNavigate();
    let [viewGoods] = useState(false);
    
    if (id.pathname === "/store") {
        viewGoods = true;
    }
    
    return (
        <div>
            <div className={style.goodsMain}>
                <Container>
                    {/* Navbar Start */}
                    <div className={style.storeHead}>
                        <Navbar bg="light" data-bs-theme="light" className={style.navBar}>
                            {/* 부트스트랩 개구려서 나중에 그냥 혼자 만들듯? */}
                            <Container>
                                <Navbar.Brand onClick={ () => navigate('/store') } className={style.storeName} style={{cursor : 'pointer'}}>스토어</Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link onClick={ () => navigate('package') }>패키지 상품</Nav.Link>
                                    <Nav.Link onClick={ () => navigate('food') }>음식</Nav.Link>
                                    <Nav.Link onClick={ () => navigate('giftTicket') }>할인권</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </div>
                    {/* Goods Start */}

                    {
                        viewGoods &&
                        <div className={style.shopLine}>
                            {/* PackageGoods Start */}

                            <PackageGoods/> 

                            <div className={style.goodsLine}>
                                
                                {/* LeftBox Start */}
                                
                                <DrinkFood/>

                                {/* RightBox Start */}

                                <GiftTicket/>

                            </div>
                        </div>
                    }   
                    
                    <Outlet/>
                </Container>

            </div>
        </div>
    )
}

export default Goods;