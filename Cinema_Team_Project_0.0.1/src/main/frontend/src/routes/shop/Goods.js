import { useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './style/Goods.module.css';
import data from './data';

function Goods() {
    let [shoes] = useState(data);
    return (
        <div>
            <Container>
                <h3>
                    상품 팔거임 <Badge bg="secondary">New</Badge>
                </h3>
                <Row>
                    {
                        shoes.map((a, i) => {
                            return (
                                <Col>
                                    <img src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} width="80%" />
                                    <h4>{shoes[i].title}</h4>
                                    <div>{shoes[i].price}</div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <div className={style.leftGoods}>
                <h3>
                    상품 팔거임 <Badge bg="secondary">New</Badge>
                </h3>
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

            <div className=''>
                <h3>
                    상품 팔거임 <Badge bg="secondary">New</Badge>
                </h3>
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
    )
}

export default Goods;