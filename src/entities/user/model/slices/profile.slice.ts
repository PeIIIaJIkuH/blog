import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { fetchProfile, updateProfileData, updateProfileImage } from '../services/profile.services'
import { type User } from '../types'
import { type ProfileState } from '../types/profile.types'

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
		builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<User>) => {
			state.profile = { ...state.profile, ...action.payload }
		})
		builder.addCase(updateProfileImage.fulfilled, (state, action: PayloadAction<User>) => {
			state.profile = { ...state.profile, ...action.payload }
		})
	},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
