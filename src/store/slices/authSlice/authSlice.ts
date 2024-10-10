import { AuthType } from '@/store/types/type.authSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthType = {
	isLoading: false,
	isAuthenticated: false,
	user: null,
};

const authSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setLoading } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
