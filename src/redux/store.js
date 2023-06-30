import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from './user';
import {projectSlice} from './project';

export default configureStore({
	reducer: {
		project:projectSlice.reducer,
		user: userSlice.reducer,
	},
});
