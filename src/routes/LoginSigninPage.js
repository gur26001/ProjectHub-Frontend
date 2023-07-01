import React, { startTransition, useState } from 'react';
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	Box,
} from '@mui/material';
import Logo from '../components/LOGO';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from '../features/user/user';

export default function LoginSigninPage() {
	const [activeTab, setActiveTab] = useState('login');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isRedirected, setRedirected] = useState(false);
	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	// const userName = useSelector((state) => state.user.userName);
	// const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		// IF LOGIN TAB OPENED:
		if (activeTab === 'login') {
			axios
				.post(`http://localhost:8000/users/login`, {
					username,
					password,
				})
				.then((response) => {
					// now pass the username to redux

					// store jwt in local storage
					localStorage.setItem(
						'accessTokenHub',
						response.data.accessTokenHub
					);

					// then navigate to homepage
					setRedirected(true);
					// console.log(userName);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			axios
				.post(`http://localhost:8000/users/`, {
					username,
					email,
					password,
				})
				.then((response) => {})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	if (isRedirected) {
		return <Navigate to="/" />;
	}
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignContent: 'center',
				marginTop: '5%',
			}}
		>
			<Card
				style={{
					width: '400px',
					margin: '32px',
					textAlign: 'center',
					border: '1px solid #ccc',
				}}
			>
				<Logo />
				<CardContent>
					<Typography variant="h5" gutterBottom>
						{activeTab === 'login' ? 'Login' : 'Sign In'}
					</Typography>
					{activeTab === 'login' ? (
						<form onSubmit={handleSubmit}>
							<TextField
								label="Username"
								variant="outlined"
								fullWidth
								margin="normal"
								onChange={(event) => {
									setUsername(event.target.value);
								}}
							/>
							<TextField
								label="Password"
								type="password"
								variant="outlined"
								fullWidth
								margin="normal"
								onChange={(event) => {
									setPassword(event.target.value);
								}}
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								fullWidth
								// onClick={dispatch(setUsername(username))}
							>
								Login
							</Button>
						</form>
					) : (
						<form onSubmit={handleSubmit}>
							<TextField
								label="Username"
								variant="outlined"
								fullWidth
								margin="normal"
								onChange={(event) => {
									setUsername(event.target.value);
								}}
							/>
							<TextField
								label="Email"
								type="email"
								variant="outlined"
								fullWidth
								margin="normal"
								onChange={(event) => {
									setEmail(event.target.value);
								}}
							/>
							<TextField
								label="Password"
								type="password"
								variant="outlined"
								fullWidth
								margin="normal"
								onChange={(event) => {
									setPassword(event.target.value);
								}}
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								fullWidth
							>
								Sign In
							</Button>
						</form>
					)}
				</CardContent>
				{/* <span>{userName}</span> */}
				<Box
					style={{
						display: 'flex',
						justifyContent: 'center',
						padding: '16px',
					}}
				>
					<Typography variant="body2">
						{activeTab === 'login'
							? "Don't have an account?"
							: 'Already have an account?'}
						<Button
							style={{ marginLeft: '8px' }}
							color="primary"
							onClick={() =>
								handleTabChange(
									activeTab === 'login' ? 'signin' : 'login'
								)
							}
						>
							{activeTab === 'login' ? 'Sign In' : 'Login'}
						</Button>
					</Typography>
				</Box>
			</Card>
		</div>
	);
}
