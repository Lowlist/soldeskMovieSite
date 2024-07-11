import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import data from './data';
import style from './style/Goods.module.css';
import {useState} from 'react';

function PackageGoods() {
    let [shoes] = useState(data);
    return (
        <div>
            <div className={style.goodsName}>
                패키지 상품
                <div className={style.plusButtonF}>
                    <Button variant="light" onClick={() => { alert("아직 미개발임") }}>+</Button>{' '}
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