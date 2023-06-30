import React, { useState } from 'react';
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

export default function ImageUpload() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [previewImage, setPreviewImage] = useState(null);
	
	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		setSelectedImage(file);

		const reader = new FileReader();
		reader.onload = () => {
			setPreviewImage(reader.result);
		};
		reader.readAsDataURL(file);
	};

	return (
		<Card
			sx={{
				maxWidth: 400,
				margin: '0 auto',
				marginTop: 10,
				display:'flex',
				textAlign: 'center',
			}}
		>
			<CardContent>
				<Typography variant="h6" gutterBottom>
					Image Upload
				</Typography>
				<input
					type="file"
					accept="image/*"
					onChange={handleImageUpload}
					style={{ display: 'none' }}
					id="image-upload"
				/>
				<label htmlFor="image-upload">
					<Button variant="contained" component="span">
						Select Image
					</Button>
				</label>
				{previewImage && (
					<CardMedia
						component="img"
						src={previewImage}
						alt="Preview"
						sx={{ maxWidth: '200px', marginTop: 10 }}
					/>
				)}
			</CardContent>
		</Card>
	);
}
