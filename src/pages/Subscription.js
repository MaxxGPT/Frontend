import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import styled from 'styled-components';
import { request } from '../services/Request';

export const Subscription = () => {

    const [userData, setUserData] = useState({});
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        getProfile();
        getPlans();
    }, []);

    const getProfile = () => {
        request('/api/users/me', {})
            .then(
                (result) => {
                    setUserData(result.data);
                }
            );
    }

    const getPlans = () => {
        request('/api/subscriptions', {})
            .then(
                (result) => {
                    if (result.data) {
                        setPlans(result.data);
                    }
                }
            );
    }

    return (
        <Container className="mt-5 mb-5 subscription">
            <PageTitle className="m-5">Plans to fit your needs</PageTitle>
            <Row>
                {plans && plans.map((plan) => (
                    <Col className="col-md-4 col-12" key={plan.name}>
                        <Card className="shadow text-center" role="card">
                            <Card.Body>
                                <Card.Title className="text-capitalize">
                                    {plan.name} Plan
                        </Card.Title>
                                <div><SubTitle>Starting At</SubTitle>
                                    <Price>$ {plan.price}</Price>
                                    <SmallLabel>* per month</SmallLabel>
                                    <MontlyRequests>{plan.requests_per_day}</MontlyRequests>
                                    <SmallLabel>Requests per day</SmallLabel></div>
                            </Card.Body>
                            <Card.Footer>
                                {(userData.subscription === plan.name) && (
                                    <div>Current</div>
                                )}
                                {(userData.subscription !== plan.name) && (
                                    <Button variant="primary" size="lg" block>Upgrade Now</Button>
                                )}
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export const PageTitle = styled.div`
    text-align: center;
    font-weight: 200;
    font-size: 68px;
    line-height: 68px;
    letter-spacing: 0;
`;
export const SubTitle = styled.div`
  font-size: 16px;
  text-transform: uppercase!important;
  font-weight: 600!important;
`;
export const Price = styled.div`
  font-size: 30px;
  text-transform: uppercase!important;
  font-weight: 600!important;
`;
export const SmallLabel = styled.div`
font-size: 14px;
font-weight: 200!important;
`;
export const MontlyRequests = styled.div`
font-size: 24px;
font-weight: 600!important;
`;

export default Subscription;