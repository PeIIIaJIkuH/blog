import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type User } from './types'

export interface UserState {
	auth: User | null
}

const initialState: UserState = {
	auth: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | null>) => {
			state.auth = action.payload
		},
	},
})

export const { actions: userActions, reducer: userReducer } = userSlice
