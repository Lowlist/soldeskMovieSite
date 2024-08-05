import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './style/Goods.module.css';

// 패키지 상품 컴포넌트
function PackageGoods() {
    let navigate = useNavigate();
    let state = useSelector((state)=>{ return state })
    let id = useLocation();
    let buttons = true;
    if (id.pathname === "/store/package"){
        buttons = false;
    }

    return (
        <div className={style.packageLine}>
            <div className={style.goodsName}>
                패키지 상품
                { 
                    buttons &&
                    <div className={style.plusButtonF}>
                        {/* 더보기로 바꾸면 어떻겠냐 나 : 좋음 */}
                        <Button variant="light" onClick={ (e) => { e.stopPropagation(); navigate('package')} }>+</Button>{' '}
                    </div>
                }
            </div>
            <hr className={style.hrCenter} />
            <Row className={style.packageRow}>
                {
                    buttons === true ?
                    [1,2,3].map((a, i) =>
<<<<<<< HEAD
                        <Col className={style.packageBox} key={i} onClick={() => navigate(`/store/${state.food.data.length+state.goods.data.length+state.goodsSet.data[i].no}`)}>
=======
                        <Col className={style.packageBox} key={i} onClick={() => navigate(`/store/${state.shop[i].id}`)}>
                            <div className={style.packageImg}>
                                <img src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} width="300px" alt='이미지 로딩 실패'/>
                            </div>
                            <div>
                                <h4>{state.shop[i].title}</h4>
                                <div>{state.shop[i].price}</div>
                            </div>
                        </Col>
                    )
                    :
                    state.shop.map((a, i) =>
                        <Col className={style.packageBox} key={i} onClick={() => navigate(`/store/${state.shop[i].id}`)}>
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
                            <div className={style.packageImg}>
                                <img src={state.goodsSet.data[i].img} width="300px" alt='이미지 로딩 실패'/>
                            </div>
                            <div>
                                <h4>{state.goodsSet.data[i].title}</h4>
                                <div>{state.goodsSet.data[i].price.toLocaleString("ko-KR")}원</div>
                            </div>
                        </Col>
                    )
                    :
                    state.goodsSet.data.map((a, i) =>
                        <Col className={style.packageBox} key={i} onClick={() => navigate(`/store/${state.food.data.length+state.goods.data.length+state.goodsSet.data[i].no}`)}>
                            <div className={style.packageImg}>
                                <img src={state.goodsSet.data[i].img} width="300px" alt='이미지 로딩 실패'/>
                            </div>
                            <div>
                                <h4>{state.goodsSet.data[i].title}</h4>
                                <div>{state.goodsSet.data[i].price.toLocaleString("ko-KR")}원</div>
                            </div>
                        </Col>
                    )
                }
            </Row>

            { !buttons && <Button variant="light" onClick={ (e) => { e.stopPropagation(); navigate('/store')} }>뒤로가기</Button> } {' '}
            
        </div>
    )
}

export default PackageGoods;