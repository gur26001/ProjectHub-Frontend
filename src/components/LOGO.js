import { Typography } from '@mui/material';
import logo from '../assests/logo.jpg';

export default function Logo() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				padding: '16px',
			}}
		>
			<img src={logo} alt="Company Logo" height="80" />
			<Typography variant="h4">ProjectHub</Typography>
		</div>
	);
}
