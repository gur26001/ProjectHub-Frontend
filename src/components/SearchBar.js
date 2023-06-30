import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
	return (
		<TextField
			id="search"
			label="Search"
			variant="outlined"
			size="small"
			sx={{
				minWidth: 700,
				marginRight: '10%',
				
			}}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton aria-label="Search">
							<SearchIcon  />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
}

export default SearchBar;
