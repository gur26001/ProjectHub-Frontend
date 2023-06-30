import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
	name: 'project',
	initialState: {
		ID: '',
	},

	reducers: {
		setID: (state, action) => {
			state.ID = action.payload;
		},
	},
});

export const { setID } = projectSlice.actions;
export default projectSlice.reducer;
