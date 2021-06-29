import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../home.css';
const HowWeUse = props => {
    return (
        <Row style={{ marginBottom: 20 }}>
            <Col xs={3}>
                <Image
                    src={props.image}
                    alt={props.title}
                    fluid
                />
            </Col>
            <Col xs={9}>
                <h5 className="home__howWeWork_title">{props.title}</h5>
                <p className="home__howWeWork_description">{props.description}</p>
            </Col>
        </Row>
    )
}

export default HowWeUse;