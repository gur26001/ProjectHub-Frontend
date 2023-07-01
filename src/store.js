import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from './features/user/user';


export default configureStore({
	reducer: {
		user: userSlice.reducer,
	},
});
