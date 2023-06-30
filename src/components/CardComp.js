import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	LinearProgress,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CardComp(props) {
	const projectKey = props.id;

	const dispatch = useDispatch();

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Link to={`/card/view/${projectKey}`}>
				<Card>
					<CardMedia
						component="img"
						height="200"
						image={props.imageUrl}
						alt="Image 1"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{props.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							by {props.createdBy}
						</Typography>
					</CardContent>
				</Card>
			</Link>
		</Grid>
	);
}
