import React, {useState} from 'react'
import {  Button, Form, Container, Row, Col } from "react-bootstrap";
import { request } from './services/Request';
import AsateraLogo from "./components/AsateraLogo";
import {ToastContainer} from "react-toastify";

export const Forgot = () => {

    const [resetData,setResetData] = useState({});
    const [setEmailSent] = useState(false);

    const handleChange = (event) => {
          // update the state;
          let _resetData = resetData;
          _resetData[event.target.name] = event.target.value;
          setResetData( _resetData );
    }

    const handleSubmit = (event) => {
          event.preventDefault();
          const data = JSON.stringify( resetData );
          const result = request("/api/auth/reset", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
          });
          result.then( (result) =>{
              setEmailSent(true);
          });
    }

    return (
        <Container className="mt-5 mb-5 login">
            <ToastContainer />
            <Row className="justify-content-md-center rounded-big shadow overflow-hidden form-div-row">
                <Col className="col-sm-12 col-12 col-md-6 login-sm-bg">
                    <div className="h-100">
                        <img src={process.env.PUBLIC_URL + 'assets/login-sm-bg.png'} className="login-img" alt="logo"/>
                        <img src={process.env.PUBLIC_URL + 'assets/logo-sm.png'} alt="logo" className="logo-sm"/>

                    </div>

                </Col>

                <Col className="col-sm-12 col-12 col-md-6 px-5 py-4 info-div">
                    <div className="border-sm-div"></div>
                    <AsateraLogo />
                    <h1 className="mt-5 login-h1">Password Recovery</h1>
                    <h3>Enter your email to recover your password</h3>
                    <Form className="mt-5" autocomplete="false">
                        <Form.Group controlId="formBasicEmail" className="input-form-group">
                            <Form.Label className="i-label">Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                required
                            />
                            <div className="input-icon">
                                <img alt="Asatera" src={process.env.PUBLIC_URL + 'assets/Check-Circle.png'} />
                            </div>
                        </Form.Group>

                        <Button variant="primary" type="submit" size="lg" block className="login-btn">
                            Send Email
                        </Button>

                    </Form>
                </Col>
                <Col className="col-sm-12 col-12 col-md-6 login-bg">
                    <div className="">
                        <img src={process.env.PUBLIC_URL + 'assets/forgot.png'} alt="Asatera" className="login-img"/>
                    </div>

                </Col>
            </Row>
        </Container>
        );

 };


export default Forgot;
