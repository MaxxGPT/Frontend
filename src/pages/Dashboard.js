import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { request } from '../services/Request';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

export const Dashboard = () => {

	const [userData, setUserData] = useState({});
	const [usage, setUsage] = useState([]);

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
				setUserData(result.data);
				getUsage();
			}
		);
	}, []);


	const redirectToLogin = () => {

		window.location.href = '/api/auth/logout';
	}

	const deleteAccount = () => {
		const response = window.confirm("Are you sure to delete your account?");
		if (response === true) {
			request('/api/users', {
				method: 'DELETE'
			}).then((result) => {
				if (result.error) {
					toast.error('There was an error removing the selected user. Please try again.');
				} else {
					redirectToLogin()
				}
			});
		}
	};

	const regenerateAPI = () => {
		const response = window.confirm("Are you sure to generate a new API key?");
		if (response === true) {
			request('/api/users/generateApi', {
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

	return (
		<Container>
			<ToastContainer />
			<div>
				<Row>
					<Col xs={10} className="mt-3 mb-3">
						<h2> User Dashboard </h2>
					</Col>
					<Col xs={2} className="mt-3 mb-3">
						<Button variant="danger" onClick={redirectToLogin}>Logout</Button>
					</Col>
				</Row>
				<Row>
					<Col><b>Full Name:</b></Col>
					<Col>{userData.name}</Col>
				</Row>
				<Row>
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
				</Row>
			</div>
		</Container>
	);

}

export default Dashboard;