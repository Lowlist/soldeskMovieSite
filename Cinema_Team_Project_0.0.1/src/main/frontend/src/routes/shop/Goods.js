import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';

function Goods() {
    let [shoes] = useState(data);
    return (
        <Container>
            <h3>
                Example heading <Badge bg="secondary">New</Badge>
            </h3>
            <Row>
                {
                    shoes.map((a,i) => {
                        return (
                            <Col>
                                <img src={'https://codingapple1.github.io/shop/shoes'+(i+1)+'.jpg'} width="80%" />
                                <h4>{shoes[i].title}</h4>
                                <div>{shoes[i].price}</div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Goods;