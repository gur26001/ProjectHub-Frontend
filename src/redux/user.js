import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		userName: '',
	},

	reducers: {
		setUsername: (state, action) => {
			state.userName = action.payload;
		},
	},
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
