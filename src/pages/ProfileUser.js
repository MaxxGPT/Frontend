import React, { useState, useEffect } from 'react'
import { request } from '../services/Request';
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

export const ProfileUser = () => {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    request('http://localhost:4000/dev/users/me', {
			headers:{
				'Authorization': 'Bearer '+localStorage.token
			}
		})
		.then(
			(result) => {
				setUserData(result.data);
			}
		);
  }, []);

  const handleChange = (event) => {
    // update the state;
    let currentData = userData;
    currentData[event.target.name] = event.target.value;
    setUserData(currentData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = JSON.stringify({
      email: userData.email,
      name: userData.name,
    });
    const result = request("http://localhost:4000/dev/users/"+userData._id, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.token
      },
      body: data
    });
    result.then((result) => {
      if (result.error) {
        toast.error("There was an error while processing your data. Please try again");
      } else {
        window.location.href = "/dashboard"
      }
    });
  }

  return (
    <Container className="mt-5 mb-5 user-profile">
      <ToastContainer />
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} className="" autoComplete="false">
            <Form.Group controlId="formBasicName" className="input-form-group">
              <Form.Label className="i-label">Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                defaultValue={userData.name || ""}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="input-form-group">
              <Form.Label className="i-label">Email Address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                defaultValue={userData.email || ""}
              />
            </Form.Group>
            <div>
              <Button variant="primary" type="submit">Update</Button>
              <Button href="/dashboard" className="ml-3" variant="danger">Return</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );

};