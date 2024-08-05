import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './style/Goods.module.css';

//음료,음식 컴포넌트
function DrinkFood() {
    let navigate = useNavigate();
    let id = useLocation();
    let state = useSelector((state)=>{ return state })
    let buttons = true;
    if (id.pathname === "/store/food"){
        buttons = false;
    }

    return (
        <div>
            {
            buttons === true ? 
            <div className={style.goodsBoxLeft}>
                <div className={style.goodsName}>
                    Drink food
                { 
                    buttons &&
                    <div className={style.plusButton}>
                        <Button variant="light" onClick={ (e) => { e.stopPropagation(); navigate('food')} }>+</Button>{' '}
                    </div>
                }
                </div>
                <hr />
                {
                    [1,2,3].map((a, i) => {
                        return (
                            <div className={style.cardBox} key={i}>
                                <Card style={{ width: '28rem', border: '0px' }}>
                                    <Card.Body className={style.cardBody} onClick={() => navigate(`/store/${state.food.data[i].no}`)}>
                                        <img className={style.cardImg} src={state.food.data[i].img} alt='이미지 로딩 실패' />
                                        <div className={style.cardContent}>
                                            <Card.Title>{state.food.data[i].title}</Card.Title>
                                            <Card.Text>
<<<<<<< HEAD
                                                {state.food.data[i].content}
                                                <div>{state.food.data[i].price.toLocaleString("ko-KR")}원</div>
=======
                                                {state.shop[i].content}
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
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
                    Drink food
                    {
                        buttons &&
                        <div className={style.plusButtonF}>
                            <Button variant="light" onClick={(e) => { e.stopPropagation(); navigate('food') }}>+</Button>{' '}
                        </div>
                    }
                </div>
                <hr className={style.hrCenter} />
                <Row>
                    {
                        state.food.data.map((a, i) =>
                            <Col className={style.packageBox} key={i} onClick={() => navigate(`/store/${state.food.data[i].no}`)}>
                                <div className={style.packageImg}>
                                    <img src={state.food.data[i].img} width="300px" alt='이미지 로딩 실패' />
                                </div>
                                <h4>{state.food.data[i].title}</h4>
                                <div>{state.food.data[i].price.toLocaleString("ko-KR")}원</div>
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

export default DrinkFood;