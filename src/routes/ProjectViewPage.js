import React, { useEffect, useState } from 'react';
import {
	Card,
	CardContent,
	Typography,
	CardMedia,
	Button,
} from '@mui/material';

import { Delete, Edit } from '@mui/icons-material';

import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function ProjectViewPage() {
	const { projectKey } = useParams();
	// const projectKey = '649975dfaeefbcf2adf9fbfc'; //getting from parameter
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('accessTokenHub')}`,
	};
	const viewMode = 'edit';
	const [project, setProjectData] = useState({});
	const [redirect, setRedirect] = React.useState(false);

	useEffect(() => {
		axios
			.get(`https://projecthub-server.onrender.com/projects/${projectKey}`)
			.then((response) => {
				// console.log(response.data);
				setProjectData(response.data);
			});
	}, []);
	function DeletPost(event) {
		event.preventDefault();
		axios
			.delete(`https://projecthub-server.onrender.com/projects/${projectKey}`,{
				headers
			})
			.then((resp) => {
				console.log(resp.data);
				setRedirect(true);
				// redirect to homepage
			})
			.catch((err) => {
				console.log(err);
			});
	}
	if (redirect) {
		return <Navigate to="/" />;
	}
	return (
		<Card
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '80vw', // 85% of viewport width
				// maxWidth: '800px',
				margin: '0 auto',
				marginTop: '16px',
				padding: 0,
				border: 'none',
			}}
		>
			<Typography
				variant="h4"
				style={{
					width: '100%',
					marginTop: '5%',
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				<div style={{ position: 'relative' }}>
					{project.title}
					<span style={{ fontSize: '14px' }}>
						by {project.createdBy}
					</span>
				</div>

				<div style={{ justifySelf: 'flex-end', marginTop: '16px' }}>
					<Link
						style={{ textDecoration: 'none' }}
						to={`/card/${viewMode}/${projectKey}`}
					>
						<Edit />
					</Link>
					{/* Add your custom buttons or actions here */}

					<Button
						style={{
							marginLeft: '8px',
							border: '1px solid black ',
						}}
						onClick={DeletPost}
					>
						<Delete />
					</Button>
				</div>
			</Typography>
			<CardMedia
				component="img"
				height="300"
				style={{
					width: '100%',
					marginTop: '16px',
					height: '100%',
					maxHeight: '800px',
					maxWidth: '600px',
				}}
				image={project.image}
				alt="Card Image"
			/>
			<CardContent
				style={{
					width: '70%',
					maxWidth: '800px',
					textAlign: 'center',
					marginTop: '16px',
				}}
			>
				<Typography
					variant="body1"
					style={{
						fontFamily: 'Arial',
						fontSize: '18px',
						textAlign: 'left',
					}}
				>
					{project.description}
				</Typography>
			</CardContent>
		</Card>
	);
}

{
	/* import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';

export default function ProjectViewPage() {
	const { id } = useParams();
	const project = {
		id: 1,
		title: 'Card 1',
		imageSrc:
			'https://media.istockphoto.com/id/1161352480/vector/sample-sign-sample-square-speech-bubble-sample.jpg?s=612x612&w=0&k=20&c=qZ480B32q1qGLxoTZEaXcxDB4BMCMDGAGnDQ0hEJ_I8=',
		description: 'Description of Card 1',
		createdBy: 'david',
	}; // Replace with actual data fetching logic
	return (
		<Card>
			<CardMedia
				component="img"
				height="140"
				image={project.imageSrc}
				alt="Card Image"
			/>
			<CardContent>
				<Typography variant="h5" component="div">
					{project.title}
				</Typography>

							
					// when the page will be in view mode else not,
					// else buttons for editpost and deletepost will be shown(if loggedin with the post's author)
				<Typography
					variant="subtitle2"
					color="textSecondary"
					component="div"
				>
					By {project.createdBy}
				</Typography>

				<Typography
					variant="body1"
					color="textSecondary"
					component="div"
				>
					{project.description}
				</Typography>
			</CardContent>
		</Card>
	);
*/
}
