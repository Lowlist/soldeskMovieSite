import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './style/Goods.module.css';

//영화 관람권 컴포넌트
function GiftTicket() {
    let navigate = useNavigate();
    let state = useSelector((state)=>{ return state })
    let id = useLocation();
    let buttons = true;

    if (id.pathname === "/store/giftTicket"){
        buttons = false;
    }
    
    return (
        <div>
            {
            buttons === true ? 
            <div className={style.goodsBoxLeft}>
                <div className={style.goodsName}>
                    영화관람권
                { 
                    buttons &&
                    <div className={style.plusButton}>
                        <Button variant="light" onClick={ (e) => { e.stopPropagation(); navigate('giftTicket')} }>+</Button>{' '}
                    </div>
                }
                </div>
                <hr/>
                {
                    [1,2,3].map((a, i) => {
                        return (
                            <div className={style.cardBox} key={i}>
                                <Card style={{ width: '28rem', border: '0px' }}>
                                    <Card.Body className={style.cardBody} onClick={() => navigate(`/store/${state.food.data.length+state.goods.data[i].no}`)}>
                                        <img className={style.cardImg} src={state.goods.data[i].img} alt='이미지 로딩 실패' />
                                        <div className={style.cardContent}>
                                            <Card.Title >{state.goods.data[i].title}</Card.Title>
                                            <Card.Text>
                                                {state.goods.data[i].content}
                                                <div>{state.goods.data[i].price.toLocaleString("ko-KR")}원</div>
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div> 
            : 
            <div>
                <div className={style.goodsName}>
                    영화관람권
                    {
                        buttons &&
                        <div className={style.plusButtonF}>
                            <Button variant="light" onClick={(e) => { e.stopPropagation(); navigate('giftTicket') }}>+</Button>{' '}
                        </div>
                    }
                </div>
                <hr className={style.hrCenter} />
                <Row>
                    {
                        state.goods.data.map((a, i) =>
                            <Col className={style.packageBox} key={i} onClick={() => navigate(`/store/${state.food.data.length + state.goods.data[i].no}`)}>
                                <div className={style.packageImg}>
                                    <img src={state.goods.data[i].img} width="300px" alt='이미지 로딩 실패' />
                                </div>
                                <h4>{state.goods.data[i].title}</h4>
                                <div>{state.goods.data[i].price.toLocaleString("ko-KR")}원</div>
                            </Col>
                        )
                    }
                </Row>
            </div>
            }

            { !buttons && <Button variant="light" onClick={ (e) => { e.stopPropagation(); navigate('/store')} }>뒤로가기</Button> } {' '}
            
        </div>
    )
}

export default GiftTicket;