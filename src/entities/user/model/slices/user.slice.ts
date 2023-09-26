import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { LS_KEYS } from 'shared/constants/local-storage'

import { type User } from '../types'
import { type UserState } from '../types/user.types'

const initialState: UserState = {
	user: null,
	rehydrated: false,
}

export const userSliceName = 'user'

export const userSlice = createSlice({
	name: userSliceName,
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | null>) => {
			state.user = action.payload
			localStorage.setItem(LS_KEYS.USER, JSON.stringify(action.payload))
		},
		rehydrate: (state) => {
			if (state.rehydrated) return
			const user = JSON.parse(localStorage.getItem(LS_KEYS.USER) ?? JSON.stringify(null))
			state.user = user
			state.rehydrated = true
		},
	},
})

export const { actions: userActions, reducer: userReducer } = userSlice
