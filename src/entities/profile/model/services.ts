import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StoreThunkConfig } from 'app/store'
import { profileActions } from 'entities/profile'

import { type Profile } from './types'

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
