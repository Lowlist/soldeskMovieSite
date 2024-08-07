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
                    :
                    state.goodsSet.data.map((a, i) =>
                        
                        // 데이터를 3군데에서 NO 참조하여 가져왔잖아?
                        // 만약에 state.goodsSet.data[i].no 이것만 사용했으면 1,2,3,4,5 <<< 이렇게밖에 안나와서 URL 지정이 고정적으로 1,2,3,4,5 중복으로 들어가게됨.
                        // 그걸 방지하기위해서 랭스<< 배열길이만큼 +로직을 추가하여 3 + 6 + 1,2,3,4,5,6 중복이 발생될 일이 없습니다.

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