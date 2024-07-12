import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import data from './data';
import style from './style/Goods.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function GiftTicket() {
    let navigate = useNavigate();
    let [shoes] = useState(data);
    return (
        <div>
            <div className={style.goodsBoxRight}>
                <div className={style.goodsName}>
                    영화관람권
                    <div className={style.plusButton}>
                        <Button variant="light" onClick={ () => navigate('giftTicket') }>+</Button>{' '}
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

export default GiftTicket;