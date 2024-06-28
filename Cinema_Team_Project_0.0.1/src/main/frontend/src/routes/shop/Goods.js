import { useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';

function Goods() {
    let [shoes] = useState(data);
    return (
        <div>
            <Container>
                <h3>
                    Example heading <Badge bg="secondary">New</Badge>
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
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Goods;