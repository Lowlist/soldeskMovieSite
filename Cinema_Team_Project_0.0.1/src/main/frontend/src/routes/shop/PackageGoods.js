import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import data from './data';
import style from './style/Goods.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeView } from '../../slice/shopSlice';
import { useState } from 'react';


// 패키지 상품 컴포넌트
function PackageGoods() {
    let navigate = useNavigate();
    let disPatch = useDispatch();
    let state = useSelector((state)=>{ return state })
    let [shoes] = useState(data);
    return (
        <div>
            <div className={style.goodsName}>
                패키지 상품
                <div className={style.plusButtonF}>
                    <Button variant="light" onClick={ (e) => { e.stopPropagation(); disPatch(changeView({package : true})); navigate('package')} }>+</Button>{' '}
                </div>
            </div>
            <hr className={style.hrCenter} />
            <Row>
                {
                    shoes.map((a, i) => {
                        return (
                            <Col key={i}>
                                <img src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} width="300px" />
                                <h4>{shoes[i].title}</h4>
                                <div>{shoes[i].price}</div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default PackageGoods;