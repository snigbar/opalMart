import { configureStore } from '@reduxjs/toolkit';
import users from './slices/userSlice/userSlice';
import authReducer from './slices/authSlice/authSlice';

export const store = configureStore({
	reducer: {
		// our reducers goes here
		users,
		authReducer,
	},
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
