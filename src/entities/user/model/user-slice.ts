import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type User, type UserState } from './types'

const initialState: UserState = {
	user: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | null>) => {
			state.user = action.payload
		},
	},
})

export const { actions: userActions, reducer: userReducer } = userSlice
