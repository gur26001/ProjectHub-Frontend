import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Avatar,
	Box,
} from '@mui/material';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.jpg';
import CreatePost from './CreatePost.js';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const userName = useSelector((state) => state.user.setUsername);
	
	if (isLoggedIn) {
		// const count = useSelector((state) => state.currentUser.username);
	}

	// Logout function
	useEffect(() => {
		// Check if user is logged in using the locally stored JWT value
		const jwt = localStorage.getItem('accessTokenHub');
		setIsLoggedIn(!!jwt); // Set isLoggedIn to true if jwt is present, false otherwise
	});
	const handleLogout = () => {
		// Clear the token from local storage
		localStorage.removeItem('accessTokenHub');
		// Update the state to reflect the logged-out status
		setIsLoggedIn(false);
	};

	const [isHovered, setIsHovered] = useState(false);

	const handleAvatarHover = () => {
		setIsHovered(true);
	};

	const handleAvatarLeave = () => {
		setIsHovered(false);
	};

	return (
		<AppBar color="" sx={{ padding: '10px' }} position="sticky">
			<Toolbar>
				{/* Logo */}
				<Typography
					variant="h6"
					component="div"
					sx={{
						flexGrow: 1,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img src={logo} style={{ height: '40px' }} />
					<Link to="/">ProjectHub</Link>
				</Typography>
				<SearchBar />

				{isLoggedIn ? (
					<Box
						display="flex"
						alignItems="center"
						justifyContent="space-around"
					>
						{/* Create Button */}
						<CreatePost />
						{/* User Avatar and Username */}
						<Box
							display="flex"
							alignItems="center"
							position="relative"
							onMouseEnter={handleAvatarHover}
							onMouseLeave={handleAvatarLeave}
						>
							<Avatar sx={{ marginRight: '8px' }}>U</Avatar>
							{(
								<Typography
									variant="body1"
									sx={{
										position: 'absolute',
										bottom: '-50px',
										width: '100%',
										left: '50%',
										fontSize: '14px',
										transform: 'translateX(-50%)',
										backgroundColor: 'rgba(0, 0, 0, 0.5)',
										padding: '4px 8px',
										borderRadius: '4px',
										boxShadow:
											'0px 2px 4px rgba(0, 0, 0, 0.1)',
									}}
								>
									{userName}
									{/* {username} */}
								</Typography>
							)}
						</Box>
						{/* <Button sx={{display:flex;justifyContent:center}}>
							Log <br /> Out
						</Button> */}
					</Box>
				) : (
					/* Login/Sign In Button */

					<Button style={{ backgroundColor: ' #1976d2' }}>
						<Link
							to="/loginsignin"
							style={{ textDecoration: 'none', color: 'white' }}
						>
							Login/Signup
						</Link>
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
}

export default Header;
