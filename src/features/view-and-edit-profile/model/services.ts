import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StoreThunkConfig } from 'app/store'
import { type ImagePayload, type Profile } from 'entities/profile'

import { profileActions } from './profile-slice'

const sliceName = 'profile'

export const fetchProfile = createAsyncThunk<Profile, void, StoreThunkConfig<string>>(
	`${sliceName}/fetchProfile`,
	async (payload, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Profile>('/profile')
			if (!response.data) {
				throw new Error('No data')
			}
			thunkAPI.dispatch(profileActions.setProfile(response.data))
			return response.data
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	},
)

export const updateProfile = createAsyncThunk<Profile, Partial<Profile>, StoreThunkConfig<string>>(
	`${sliceName}/updateProfile`,
	async (payload, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.patch<Profile>('/profile', payload)
			if (!response.data) {
				throw new Error('No data')
			}
			thunkAPI.dispatch(profileActions.setProfile(response.data))
			return response.data
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	},
)

export const updateProfileImage = createAsyncThunk<Profile, ImagePayload, StoreThunkConfig<string>>(
	`${sliceName}/updateProfileImage`,
	async (payload, thunkAPI) => {
		try {
			const formData = new FormData()
			formData.append('image', payload.image)
			formData.append('type', payload.type)
			const response = await thunkAPI.extra.api.patch<Profile>('/profile/image', formData)
			if (!response.data) {
				throw new Error('No data')
			}
			thunkAPI.dispatch(profileActions.setProfile(response.data))
			return response.data
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	},
)
