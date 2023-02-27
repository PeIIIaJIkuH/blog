import { createSlice } from '@reduxjs/toolkit'

import { type ProfileState } from './types'

const initialState: ProfileState = {
	data: null,
	status: 'idle',
	error: null,
	readOnly: false,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
