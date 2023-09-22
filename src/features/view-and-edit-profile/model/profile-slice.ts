import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type Profile } from 'entities/profile'
import i18n from 'shared/config/i18n'

import { fetchProfile, updateProfile } from './services'
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
		setProfile: (state, action: PayloadAction<Profile>) => {
			state.profile = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProfile.pending, (state) => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(fetchProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
			state.status = 'success'
			state.profile = action.payload
		})
		builder.addCase(fetchProfile.rejected, (state) => {
			state.status = 'error'
			state.error = i18n.t('error', { ns: 'profile' }) ?? 'error'
		})
		builder.addCase(updateProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
			state.profile = { ...state.profile, ...action.payload }
		})
	},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
