import React, {useState} from 'react'
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { request } from './services/Request';
import "./Styles/login.scss"

import AsateraLogo from "./components/AsateraLogo";
import { ToastContainer, toast } from "react-toastify";

export const Login = () => {

    const [loginData,setLoginData] = useState({});

    const handleChange = (event) => {
          // update the state;
          let currentLoginData = loginData;
          currentLoginData[event.target.name] = event.target.value;
          setLoginData( currentLoginData );
    }

    const handleSubmit = (event) => {
          event.preventDefault();
          const data = JSON.stringify( loginData );
          const result = request("/api/auth/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
          });
          result.then( (result) =>{
              if(result.error){
                toast.error("Email or password incorrect");
              }else{
                  window.location.href="/dashboard";
              }
          });
    }

    return (
        <Container className="mt-5 mb-5 login">
            <ToastContainer />
            <Row className="justify-content-md-center rounded-big shadow overflow-hidden form-div-row">
                <Col className="col-sm-12 col-12 col-md-6 login-sm-bg">
                    <div className="h-100">
                        <img src={process.env.PUBLIC_URL + 'assets/login-sm-bg.png'} className="login-img"/>
                        <a href="/">
                            <img src={process.env.PUBLIC_URL + 'assets/logo-sm.png'} className="logo-sm"/>

                        </a>

                    </div>

                </Col>

                <Col className="col-sm-12 col-12 col-md-6 px-5 py-4 info-div">
                    <div className="border-sm-div"></div>
                    <AsateraLogo />
                    <h1 className="mt-3 login-h1">Welcome Back!</h1>
                    <h3>Sign in to continue</h3>
                    <Form onSubmit={handleSubmit} className="" autocomplete="false">
                        <Form.Group controlId="formBasicEmail" className="input-form-group">
                            <Form.Label className="i-label">Email</Form.Label>
                            <Form.Control
                            type="text"
                            name="email"
                            onChange={handleChange}
                            required
                            />
                            <div className="input-icon">
                                <img src={process.env.PUBLIC_URL + 'assets/Check-Circle.png'} />
                            </div>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" className="input-form-group">
                            <Form.Label className="i-label">Password</Form.Label>
                            <Form.Control
                            type="password"
                            name="password"
                            onChange={handleChange}
                            required
                            />
                            <div className="input-icon">
                                <img src={process.env.PUBLIC_URL + 'assets/Eye.png'} />
                            </div>
                        </Form.Group>
                        <div className="forgot text-right my-3">
                            <Link to="/forgot">forgot password?</Link>
                        </div>
                        <Button variant="primary" type="submit" size="lg" block className="login-btn">
                            Login
                        </Button>
                        <Button href="/register" variant="outline-secondary" size="lg" block className="mt-3 register-btn">Create an account</Button>
                        <div className="social-div">
                            <a href="#"><i className="fa fa-twitter"></i> </a>
                            <a href="#"><i className="fa fa-google	"></i> </a>
                            <a href="#"><i className="fa fa-github	"></i> </a>
                            <a href="#" className="sign-in-with">Or Sign In With </a>
                        </div>
                    </Form>
                </Col>
                <Col className="col-sm-12 col-12 col-md-6 login-bg">
                    <div className="">
                        <img src={process.env.PUBLIC_URL + 'assets/login_logo.svg'} className="login-img"/>
                    </div>

                </Col>
            </Row>
         </Container>
        );

 };
