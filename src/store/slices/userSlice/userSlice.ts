import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface User {
	id: string;
	name: string;
	email: string;
}
const initialState: Array<User> = [
	{
		id: '1',
		name: 'John Doe',
		email: 'john@test.com',
	},
];
export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<User>) => {
			state.push(action.payload);
		},
	},
});
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
