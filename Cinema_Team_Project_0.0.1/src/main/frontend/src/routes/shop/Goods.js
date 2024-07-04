import { useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './style/Goods.module.css';
import ReactPlayer from 'react-player'
import data from './data';

function Goods() {
    let [shoes] = useState(data);
    return (
        <div>
            <div className={style.centerGoods}>
                <Container>
                    <div className={style.goodsName}>
                        상품 팔거임 <Badge bg="secondary">New</Badge>
                    </div>
                    <hr className={style.hrCenter}/>
                    <Row>
                        {
                            shoes.map((a, i) => {
                                return (
                                    <Col key={i}>
                                        <img src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} width="80%" />
                                        <h4>{shoes[i].title}</h4>
                                        <div>{shoes[i].price}</div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
                <div className={style.goodsLine}>
                    <div className={style.goodsBoxLeft}>
                        <div className={style.goodsName}>
                            상품 팔거임 <Badge bg="secondary">New</Badge>
                        </div>
                        <hr/>
                        <div className={style.cardBox}>
                            <Card style={{ width: '28rem' }}>
                                <Card.Body className={style.cardBody}>
                                    <img className={style.cardImg} src='https://codingapple1.github.io/shop/shoes2.jpg'>
                                    </img>
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
                        <div className={style.cardBox}>
                            <Card style={{ width: '28rem' }}>
                                <Card.Body className={style.cardBody}>
                                    <img className={style.cardImg} src='https://codingapple1.github.io/shop/shoes2.jpg'>
                                    </img>
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
                        <div className={style.cardBox}>
                            <Card style={{ width: '28rem' }}>
                                <Card.Body className={style.cardBody}>
                                    <img className={style.cardImg} src='https://codingapple1.github.io/shop/shoes2.jpg'>
                                    </img>
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
                    </div>

                    <div className={style.goodsBoxRight}>
                        <div className={style.goodsName}>
                            상품 팔거임 <Badge bg="secondary">New</Badge>
                        </div>
                        <hr/>
                        <div className={style.cardBox}>
                            <Card style={{ width: '28rem' }}>
                                <Card.Body className={style.cardBody}>
                                    <img className={style.cardImg} src='https://codingapple1.github.io/shop/shoes2.jpg'>
                                    </img>
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
                        <div className={style.cardBox}>
                            <Card style={{ width: '28rem' }}>
                                <Card.Body className={style.cardBody}>
                                    <img className={style.cardImg} src='https://codingapple1.github.io/shop/shoes2.jpg'>
                                    </img>
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
                        <div className={style.cardBox}>
                            <Card style={{ width: '28rem' }}>
                                <Card.Body className={style.cardBody}>
                                    <img className={style.cardImg} src='https://codingapple1.github.io/shop/shoes2.jpg'>
                                    </img>
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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Goods;