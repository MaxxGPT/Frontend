import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { request } from '../services/Request';
import { Row, Col, Container, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import NavigationBar from "../components/NavigationBar"
import CopyIcon from "../assets/images/copy_icon.svg";
import Icon from "../assets/images/dashboard_icon.png";
import Oval from "../assets/images/home-maching-oval.png";
import Eye from "../assets/images/eye.svg";
import Pencil from "../assets/images/pencil.svg";
import Footer from "../components/Footer";

export const Dashboard = () => {

	const [userData, setUserData] = useState({
		_id:'1',
		name:'Ulises Medrano',
		email: 'ulises.medrano@designamx.com',
		api_key: '12345678'
	});
	const [usage, setUsage] = useState([]);
	const [data, setData] = useState({});
	const [showKey, setKey] = useState(false);

	const getUsage = () => {
		request('http://localhost:4000/dev/users/usage', {
			headers:{
				'Authorization': 'Bearer '+localStorage.token
			}
		})
			.then(
				(result) => {
					const _data = {
						labels: result.data.map(day => day._id),
						datasets: [{
							label: 'Requests per day',
							borderColor: 'rgba(75,192,192,1)',
							data: result.data.map(day => day.req),
							fill: false,
						}]
					}
					setUsage(_data);
				}
			);
	}

	useEffect(() => {
		request('http://localhost:4000/dev/users/me', {
			headers:{
				'Authorization': 'Bearer '+localStorage.token
			}
		})
		.then(
			(result) => {
				if(result.data){
					setUserData(result.data);
					getUsage();
				}
			}
		);
	}, []);


	const redirectToLogin = () => {
		delete localStorage.token;
		window.location.href = '/';
	}

	const deleteAccount = () => {
		const response = window.confirm("Are you sure to delete your account?");
		if (response === true) {
			request('http://localhost:4000/dev/users/'+userData._id, {
				method: 'DELETE',
				headers:{
					'Authorization': 'Bearer '+localStorage.token
				}
			}).then((result) => {
				if (result.error) {
					toast.error('There was an error removing the selected user. Please try again.');
				} else {
					redirectToLogin();
				}
			});
		}
	};

	const regenerateAPI = () => {
		const response = window.confirm("Are you sure to generate a new API key?");
		if (response === true) {
			request('http://localhost:4000/dev/users/key', {
				headers:{
					'Authorization': 'Bearer '+localStorage.token
				}
			}).then((result) => {
				if (result.error) {
					toast.error('There was an error removing the selected user. Please try again.');
				} else {
					setUserData((_userdata) => {
						return { ..._userdata, apiKey: result.data.apiKey }
					});
					toast.success('Your API Key has been updated.');
				}
			});
		}
	};

	const handleChange = (e) =>{
		setData({
			[e.target.name]: e.target.value
		});
	}

	const changeEmail = () =>{
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

	const changePassword = () =>{
		const send_data = JSON.stringify({
			email: userData.email,
			password: data.password
		});
		const result = request("http://localhost:4000/dev/users/password", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: send_data
		});
		result.then( (result) =>{
			if(result.error){
				toast.error("There was an error while processing your data. Please try again");
			}else{
				window.location.href="/dashboard";
			}
		});
	}

	const copyKey = () =>{
		/* Copy the text inside the text field */
		navigator.clipboard.writeText(userData.api_key);
		toast.success("API key copied!");
	}

	return (
		<div id="dashboard">
			<NavigationBar/>
			<Container>
				<ToastContainer />
				<div id="dashboard-container">
					<Row>
						<Col xs={10} className="mt-3 mb-3">
							<h2>{ userData.name } </h2>
							<p className="small">Manage your asatera profile</p>
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={{span:8,offset:2}}>
							<div className="d-none d-sm-none d-md-block">
								<Row className="align-items-end">
									<Col xs={12} md={8}>
										<Form.Group controlId="email" className="input-form-group">
											<Form.Label className="i-label">EMAIL:</Form.Label>
											<Form.Control
												type="email"
												name="email"
												onChange={handleChange}
												defaultValue={userData.email || ""}
											/>
										</Form.Group>
									</Col>
									<Col xs={12} md={4}>
										<Button onClick={changeEmail}>Change Email</Button>
									</Col>
								</Row>
							</div>
							<div className="d-block d-md-none d-lg-none">
								<Form.Label className="i-label">EMAIL:</Form.Label>
								<InputGroup className="mb-3">
									<FormControl type="email"
												name="email"
												onChange={handleChange}
												defaultValue={userData.email || ""}/>
									<InputGroup.Append>
										<InputGroup.Text><img src={Pencil}></img></InputGroup.Text>
									</InputGroup.Append>
								</InputGroup>
							</div>
							<div className="d-none d-sm-none d-md-block">
								<Row className="align-items-end mt-3">
									<Col xs={12} md={8}>
										<Form.Group controlId="password" className="input-form-group">
											<Form.Label className="i-label">PASSWORD:</Form.Label>
											<Form.Control
												type="password"
												name="password"
												onChange={handleChange}
												defaultValue={"********"}
											/>
										</Form.Group>
									</Col>
									<Col xs={12} md={4}>
										<Button onClick={changePassword}>Change Password</Button>
									</Col>
								</Row>
							</div>
							<div className="d-block d-md-none d-lg-none">
								<Form.Label className="i-label">PASSWORD:</Form.Label>
								<InputGroup className="mb-3">
									<FormControl type="password"
												name="password"
												onChange={handleChange}
												defaultValue={"********"}/>
									<InputGroup.Append>
										<InputGroup.Text><img src={Pencil}></img></InputGroup.Text>
									</InputGroup.Append>
								</InputGroup>
							</div>
							<div className="d-none d-sm-none d-md-block">
								<Row className="align-items-end mt-3">
									<Col xs={12} md={8}>
										<Form.Group controlId="api_key" className="input-form-group">
											<Form.Label className="i-label">API KEY:</Form.Label>
											<Form.Control
												type="text"
												name="api_key"
												disabled={true}
												defaultValue={userData.api_key ? userData.api_key : ''}
											/>
										</Form.Group>
									</Col>
									<Col xs={12} md={4}>
										<Button onClick={copyKey} className="w-inherit">								
											<img src={CopyIcon}></img>
										</Button>
									</Col>
								</Row>
							</div>
							<div className="d-block d-md-none d-lg-none">
								<Form.Label className="i-label">API KEY:</Form.Label>
								<InputGroup className="mb-3">
									<FormControl type={showKey ? "text" : 'password'}
												name="api_key"
												disabled={true}
												defaultValue={userData.api_key ? userData.api_key : ''}/>
									<InputGroup.Append onClick={()=>{setKey(!showKey)}}>
										<InputGroup.Text><img src={Eye}></img></InputGroup.Text>
									</InputGroup.Append>
								</InputGroup>
								<button className="btn btn-link" onClick={copyKey}>
									<img src={CopyIcon}></img> Copy API
								</button>
							</div>
						</Col>
					</Row>
					{/*<Row>
						<Col><b>Email:</b></Col>
						<Col>{userData.email}</Col>
					</Row>
					<Row>
						<Col><b>API Key:</b></Col>
						<Col>{userData.apiKey}</Col>
					</Row>
					<Row>
						<Col><b>Subscription Level:</b></Col>
						<Col>{userData.subscription}</Col>
					</Row>
					<br />
					<Row>
						{userData.isAdmin &&
							<Col>
								<Button variant="info" href="/sources">Source List</Button>
							</Col>
						}
						<Col>
							<Button variant="info" href="/profile/user">Update information</Button>
						</Col>
						<Col>
							<Button variant="info" href="/profile/password">Change password</Button>
						</Col>
						<Col>
							<Button variant="warning" onClick={regenerateAPI}>Regenerate API Key</Button>
						</Col>
						<Col>
							<Button variant="danger" onClick={deleteAccount}>Delete account</Button>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button variant="info" href="/profile/subscription">Manage Subscription</Button>
						</Col>
						<Col>
							<Button variant="info" href="/">Back To Home</Button>
						</Col>
					</Row>
					<Row className="mt-5">
						<Col>
							<h2>Usage </h2>
							<Line data={usage} />
						</Col>
					</Row>*/}
				</div>
				<div className="suscription-background">
					<img src={Oval}></img>
					<div className="suscriptions">
						<Row className="align-items-center">
							<Col xs={{span:5,offset:4}} md={{span:1,offset:0}}>
								<img src={Icon} className="w-100"></img>
							</Col>
							<Col xs={12} md={6}>
								<div className="title align-items-center">
									<h1>Developer Plan</h1>
									<div className="label-active">
										Active
									</div>
								</div>
								<div className="text align-items-center">
									<p>Billing Montly</p>
									<p className="separator"></p>
									<p>Plan Expire on <b>Jul 12, 2020</b></p>
								</div>
							</Col>
							<Col xs={12} md={{offset:1,span:4}}>
								<Button variante="warning">
									Manage Plan
								</Button>
							</Col>
						</Row>
					</div>
				</div>
			</Container>
			<Footer></Footer>
		</div>
	);

}

export default Dashboard;