import { useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
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
                    <hr/>
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
                <div className={style.leftGoods}>
                    <div className={style.goodsName}>
                        상품 팔거임 <Badge bg="secondary">New</Badge>
                    </div>
                    <hr/>
                    <div className={style['card-box']}>
                        <div className={style.cardImg}>
                        </div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{shoes[0].title}</Card.Title>
                                <Card.Text>
                                    {shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{shoes[0].title}</Card.Title>
                            <Card.Text>
                                {shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{shoes[0].title}</Card.Title>
                            <Card.Text>
                                {shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className={style.rightGoods}>
                    <div className={style.goodsName}>
                        상품 팔거임 <Badge bg="secondary">New</Badge>
                    </div>
                    <hr/>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{shoes[0].title}</Card.Title>
                            <Card.Text>
                                {shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{shoes[0].title}</Card.Title>
                            <Card.Text>
                                {shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{shoes[0].title}</Card.Title>
                            <Card.Text>
                                {shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}{shoes[0].title}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Goods;