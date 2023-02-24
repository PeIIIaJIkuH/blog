import { createSlice } from '@reduxjs/toolkit'

import { type UserState } from '../types/user'

const initialState: UserState = {}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
})

export const { actions: userActions, reducer: userReducer } = userSlice
