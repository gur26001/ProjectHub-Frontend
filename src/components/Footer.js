import React from 'react';
import { Typography, Box } from '@mui/material';

function Footer() {
	return (
		<Box sx={{ p: 2, bgcolor: 'background.default' }}>
			<Typography variant="body2" align="center">
				© 2023 My Company. All rights reserved.
			</Typography>
		</Box>
	);
}

export default Footer;
