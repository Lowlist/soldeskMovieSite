import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import data from './data';
import style from './style/Goods.module.css';
import { useState } from 'react';

function DrinkFood() {
    let [shoes] = useState(data);
    return (
        <div>
            <div className={style.goodsBoxLeft}>
                <div className={style.goodsName}>
                    Drink food
                    <div className={style.plusButton}>
                        <Button variant="light" onClick={() => { alert("아직 미개발임") }}>+</Button>{' '}
                    </div>
                </div>
                <hr />
                {
                    shoes.map((a, i) => {
                        return (
                            <div className={style.cardBox}>
                                <Card style={{ width: '28rem' }}>
                                    <Card.Body className={style.cardBody}>
                                        <img className={style.cardImg} src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} />
                                        <div className={style.cardBox}>
                                            <Card.Title>하드 코딩 해버릴거야</Card.Title>
                                            <Card.Text>
                                                하드코딩 해버릴거야
                                                하드코딩 해버릴거야
                                                하드코딩 해버릴거야
                                                하드코딩 해버릴거야
                                                하드코딩 해버릴거야
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DrinkFood;