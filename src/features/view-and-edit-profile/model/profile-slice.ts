import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type User } from 'entities/user'

import { fetchProfile, updateProfile, updateProfileImage } from './services'
import { type ProfileState } from './types'

const initialState: ProfileState = {
	profile: null,
	status: 'idle',
	error: null,
}

export const profileSliceName = 'profile'

export const profileSlice = createSlice({
	name: profileSliceName,
	initialState,
	reducers: {
		setProfile: (state, action: PayloadAction<User>) => {
			state.profile = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProfile.pending, (state) => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(fetchProfile.fulfilled, (state, action: PayloadAction<User>) => {
			state.status = 'success'
			state.profile = action.payload
		})
		builder.addCase(fetchProfile.rejected, (state) => {
			state.status = 'error'
			state.error = 'errors.no_profile'
		})
		builder.addCase(updateProfile.fulfilled, (state, action: PayloadAction<User>) => {
			state.profile = { ...state.profile, ...action.payload }
		})
		builder.addCase(updateProfileImage.fulfilled, (state, action: PayloadAction<User>) => {
			state.profile = { ...state.profile, ...action.payload }
		})
	},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
