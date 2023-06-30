import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function CreatePost() {
	return (
		<Button
			variant="contained"
			color="primary"
			style={{ marginRight: '20px' }}
		>
			<Link
				to="/card/create"
				style={{
					display: 'flex',
					textDecoration: 'none',
					color: 'white',
					padding: '0',
				}}
			>
				<Add />
			</Link>
		</Button>
	);
}
