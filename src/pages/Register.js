import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { isAuth } from "../helpers/auth";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/register.css";
import AsateraLogo from "../components/AsateraLogo";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { useHistory } from 'react-router-dom';


export const Register = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  //handle change from inputs
  const handleChange = (event) => {
    const value = ["terms"].includes(event.target.name) ? event.target.checked : event.target.value
    setUserData({ ...userData, [event.target.name]: value });
  };

  const redirectToCompleted = () => {
    window.location.href = "/register-complete";
  }

  //submit data to the backend
  const handleSubmit = (event) => {
    event.preventDefault();

    if (userData.name && userData.email && userData.password) {
      if (userData.terms) {
        if (userData.password === userData.password2) {
          axios
            .post(`http://localhost:4000/dev/users/signin`, userData)
            .then((res) => {
              redirectToCompleted();
            })
            .catch((err) => {
              if (err.request.status === 400) {
                toast.error("Something went wrong");
              } else if (err.request.status === 405) {
                toast.warning("Email is already registered");
              }
            });
        } else {
          toast.error("Passwords do not match");
        }
      } else {
        toast.error("You must agree to the terms and conditions");
      }
    } else {
      toast.error("Fill in all the data");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {isAuth() ? <Redirect to="/" /> : null}
      <ToastContainer />
      <Container className="mt-5 mb-5 login">
        <div className="auth__backToHome">
          <button onClick={() => history.push("/")}>
            <ArrowBackIosIcon size="small" />
            <span>Back To Home</span>
          </button>
        </div>
        <Row className="justify-content-md-center rounded-big shadow overflow-hidden form-div-row">
          <Col className="col-sm-12 col-12 col-md-6 login-sm-bg">
            <div className="h-100">

              <img src={process.env.PUBLIC_URL + 'assets/login-sm-bg.png'} alt="logo" className="login-img" />
              <a href="/">
                <img src={process.env.PUBLIC_URL + 'assets/logo-sm.png'} alt="logo" className="logo-sm" />
              </a>


            </div>

          </Col>
          <Col className="col-sm-12 col-12 col-md-6 px-5 py-4 info-div">
            <AsateraLogo />
            <div className="border-sm-div"></div>
            <h1 className="mt-3 login-h1">Create an Account</h1>
            <h3>Sign up to continue</h3>
            <Form onSubmit={handleSubmit} className="mb-0">
              <Form.Group controlId="formBasicName" className="input-form-group">
                <Form.Label className="i-label">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  arial-label="inputName"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="input-form-group" controlId="formBasicEmail">
                <Form.Label className="i-label">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                <div className="input-icon">
                  <img alt="circle" src={process.env.PUBLIC_URL + 'assets/Check-Circle.png'} />
                </div>
              </Form.Group>
              <Form.Group className="input-form-group" controlId="formBasicPassword">
                <Form.Label className="i-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                <div className="input-icon">
                  <img src={process.env.PUBLIC_URL + 'assets/Eye.png'} alt="eye" />
                </div>
              </Form.Group>
              <Form.Group className="input-form-group" controlId="formBasicPassword2">
                <Form.Label className="i-label">Password Confirm</Form.Label>
                <Form.Control
                  type="password"
                  name="password2"
                  onChange={handleChange}
                />
                <div className="input-icon">
                  <img src={process.env.PUBLIC_URL + 'assets/Eye.png'} alt="eye" />
                </div>
              </Form.Group>
              <div className="custom-control custom-checkbox check-form">
                <input type="checkbox" className="custom-control-input" name="terms" id="terms" onChange={handleChange} />
                <label className="custom-control-label" htmlFor="terms">I agree with <Link to="/terms">terms and conditions</Link></label>
              </div>
              {/*<Form.Group className="input-form-group check-form" controlId="formBasicTerms">

                <label className="i-label">
                  <input type="checkbox" className="mr-2" name="terms" onChange={handleChange} />

                </label>
              </Form.Group>
              <Form.Group className="input-form-group check-form" controlId="formBasicTerms">
                <label className="i-label">
                  <input type="checkbox" className="mr-2" name="terms" onChange={handleChange} />

                </label>
              </Form.Group>*/}
              <Button variant="primary" className="login-btn" type="submit" size="lg" block>
                Create an account
              </Button>
              <div className="social-div">
                <a href="/"><i className="fa fa-twitter"></i> </a>
                <a href="/"><i className="fa fa-google	"></i> </a>
                <a href="/"><i className="fa fa-github	"></i> </a>
                <a href="/login" className="sign-in-with">Or Sign In With </a>
              </div>
            </Form>

          </Col>
          <Col className="col-sm-12 col-12 col-md-6 login-bg">
            <div className="">
              <img src={process.env.PUBLIC_URL + 'assets/register.svg'} alt="eye" className="login-img" />
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;