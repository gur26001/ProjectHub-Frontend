import React, { useEffect, useState } from 'react';
import {
	Card,
	CardContent,
	Typography,
	CardMedia,
	Button,
} from '@mui/material';
import { Link, Navigate, Outlet, useParams } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function CreateProject() {
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('accessTokenHub')}`,
	};
	const [project, setProjectData] = useState({});
	const [ititle, setITitle] = useState('');
	const [iImage, setiImage] = useState('');
	const [iDescription, setDescription] = useState('');
	const [redirect, setRedirect] = React.useState(false);
	// const userName = useSelector((state) => state.user.setUsername);
	function createPost(event) {
		event.preventDefault();
		axios
			.post(
				`https://projecthub-server.onrender.com/projects/`,
				{
					title: ititle,
					description: iDescription,
					image: iImage,
					createdBy: 'admin1',
				},
				{ headers }
			)
			.then((resp) => {
				if (resp.status === 200) {
					setRedirect(true);

					// localStorage.setItem('openedProject', resp.data);
				}
			})
			.catch((err) => {
				console.log(err.response.status);
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
			}}
		>
			<Typography
				variant="h3"
				style={{
					width: '70%',
					marginTop: '5%',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
			>
				New Project:
			</Typography>
			<Typography
				variant="h4"
				style={{
					width: '70%',
					marginTop: '3%',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-end',
						padding: '2%',
						paddingLeft: '0',
					}}
				>
					<input
						type="text"
						defaultValue={project.title}
						style={{
							fontSize: '24px',

							width: '80%',
							background: 'transparent',
							outline: 'none',
							paddingLeft: '10px',
						}}
						placeholder="Title"
						value={ititle}
						onChange={(event) => {
							setITitle(event.target.value);
						}}
					/>
					<span style={{ fontSize: '14px' }}>
						By
						{
							// userName
							// name taken from local state and store it in createBY
						}
					</span>
				</div>

				<div style={{ justifySelf: 'flex-end', marginTop: '16px' }}>
					{/* Add your custom buttons or actions here */}
					<Link style={{ textDecoration: 'none' }} to={`/`}>
						<Button variant="contained" color="primary">
							Cancel
						</Button>
					</Link>
				</div>
			</Typography>

			{/* IMAGE UPLOADING */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					width: '70%',
				}}
			>
				<input
					type="text"
					defaultValue={project.image}
					placeholder="Image Url"
					value={iImage}
					style={{
						fontSize: '20px',
						background: 'transparent',
						outline: 'none',
						paddingLeft: '10px',
						width: '100%',
					}}
					onChange={(event) => {
						setiImage(event.target.value);
					}}
				/>
			</div>
			{/* <ImageUpload /> */}

			<CardContent
				style={{
					width: '70%',
					maxWidth: '800px',
					textAlign: 'center',
					marginTop: '16px',
				}}
			>
				<textarea
					placeholder="Desricption"
					defaultValue={project.description}
					value={iDescription}
					style={{
						fontFamily: 'Arial',
						fontSize: '18px',
						textAlign: 'left',

						background: 'transparent',
						outline: 'none',
						resize: 'vertical',
						width: '100%',
						height: '200px',
						padding: '8px',
						boxSizing: 'border-box',
					}}
					onChange={(event) => {
						setDescription(event.target.value);
					}}
				></textarea>
			</CardContent>
			<Button
				variant="contained"
				color="primary"
				style={{ margin: '16px' }}
				onClick={createPost}
			>
				Submit
			</Button>
		</Card>
	);
}
// import React from 'react';
// export default function CreateProject() {
// 	return <div>CREEEEEEA</div>;
// }
