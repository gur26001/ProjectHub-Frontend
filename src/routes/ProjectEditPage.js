import React, { useEffect, useState } from 'react';
import {
	Card,
	CardContent,
	Typography,
	CardMedia,
	Button,
} from '@mui/material';
import { Link, Navigate, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import ImageUpload from '../components/ImageUpload';

export default function ProjectEditPage() {
	// const { projectKey } = useParams();

	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('accessTokenHub')}`,
	};
	const { projectKey } = useParams(); //getting from parameter
	const [project, setProjectData] = useState({});
	const [iTitle, setITitle] = useState('');
	const [iImage, setiImage] = useState('');
	const [iDescription, setDescription] = useState('');
	const [isRedirected, setRedirect] = useState(false);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/projects/${projectKey}`)
			.then((response) => {
				// console.log(response.data);

				setProjectData(response.data);
				setITitle(project.title);
				setiImage(project.iImage);
				setDescription(project.iDescription);
			});
	}, []); // Replace with actual data fetching logic
	function EditPage(event) {
		event.preventDefault();
		axios
			.put(
				`http://localhost:8000/projects/${projectKey}`,
				{
					title: iTitle,
					description: iDescription,
					image: iImage,
				},
				{ headers }
			)
			.then((resp) => {
				console.log(resp.data);
				setRedirect(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	if (isRedirected) {
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
				Edit Your Project Details:
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
						defaultValue={iTitle}
						style={{
							fontSize: '24px',

							width: '80%',
							background: 'transparent',
							outline: 'none',
							paddingLeft: '10px',
						}}
						placeholder="Title"
						onChange={(event) => {
							setITitle(event.target.value);
						}}
					/>
					<span style={{ fontSize: '14px' }}>
						{'   '}by{' YOU '}
					</span>
				</div>

				<div style={{ justifySelf: 'flex-end', marginTop: '16px' }}>
					{/* Add your custom buttons or actions here */}
					<Link
						style={{ textDecoration: 'none' }}
						to={`/card/view/${projectKey}`}
					>
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
				onClick={EditPage}
			>
				Submit
			</Button>
		</Card>
	);
}
