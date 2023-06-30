import React, { useEffect, useRef, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import CardComp from './CardComp';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CardsContainer() {
	const [cardData, setData] = useState([]);
	const parentRef = useRef(null);
	useEffect(() => {
		axios.get('http://localhost:8000/projects/').then((response) => {
			console.log(response.data);
			setData(response.data);
		});
		// setData([
		// 	{
		// 		id: 1,
		// 		title: 'Card 1',
		// 		imageUrl: 'https://example.com/card1.jpg',
		// 		createdBy: 'john doe',
		// 	},
		// 	{
		// 		id: 2,
		// 		title: 'Card 2',
		// 		imageUrl: 'https://example.com/card2.jpg',
		// 		createdBy: 'david bomb',
		// 	},
		// 	// Add more card data as needed
		// ]);
		// // Update the parent container width based on the child component width
	}, []);
	return (
		<Grid container spacing={5} sx={{ padding: '5%' }}>
			{cardData.map((card) => (
				<CardComp
					key={card._id}
					id={card._id}
					title={card.title}
					imageUrl={card.image} //adjust the ui  of image to look better
					createdBy={card.createdBy}
				/>
			))}
		</Grid>
	);
}

export default CardsContainer;
