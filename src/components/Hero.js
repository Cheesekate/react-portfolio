import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Hero(props) {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            {props.title && <h1>{props.title}</h1>}
                            {props.subtitle && <h2>{props.subtitle}</h2>}
                            {props.text && <h3>{props.text}</h3>}
                        </Col>
                    </Row>
                </Container>

            </Jumbotron>

        </div>
    )
}
