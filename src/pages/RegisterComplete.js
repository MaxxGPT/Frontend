import React from "react";
import { isAuth } from "../helpers/auth";
import { Redirect} from "react-router-dom";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "../Styles/register.css";
import AsateraLogo from "../components/AsateraLogo";
import {ToastContainer} from "react-toastify";

export const RegisterComplete = () => {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {isAuth() ? <Redirect to="/" /> : null}
        <Container className="mt-5 mb-5 login">
            <ToastContainer />
            <Row className="justify-content-md-center rounded-big shadow overflow-hidden form-div-row">
                <Col className="col-sm-12 col-12 col-md-6 login-sm-bg">
                    <div className="h-100">
                        <img src={process.env.PUBLIC_URL + 'assets/login-sm-bg.png'} className="login-img" alt="logo" />
                        <img src={process.env.PUBLIC_URL + 'assets/logo-sm.png'} className="logo-sm" alt="logo"/>

                    </div>

                </Col>

                <Col className="col-sm-12 col-12 col-md-6 px-5 py-4 info-div">
                    <div className="border-sm-div"></div>
                    <AsateraLogo />
                    <h1 className="mt-5 login-h1 r-complete text-center">Registeration Completed. Please confirm
                        your email id by clicking on the link sent
                        to your email.</h1>

                    <Form className="mt-5 r-success" autocomplete="false">

                        <Button variant="primary" type="submit" size="lg" block className="login-btn">
                            Sounds Great !
                        </Button>

                    </Form>
                </Col>
                <Col className="col-sm-12 col-12 col-md-6 login-bg">
                    <div className="">
                        <img src={process.env.PUBLIC_URL + 'assets/registration-completed.svg'} className="login-img" alt="Asatera"/>
                    </div>

                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default RegisterComplete;
