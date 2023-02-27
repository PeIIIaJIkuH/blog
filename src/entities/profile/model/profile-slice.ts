import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import i18n from 'shared/config/i18n'

import { fetchProfile } from './services'
import { type Profile, type ProfileState } from './types'

const initialState: ProfileState = {
	profile: null,
	status: 'idle',
	error: null,
	readOnly: false,
}

export const profileSlice = createSlice({
	name: 'profile',
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
	},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
