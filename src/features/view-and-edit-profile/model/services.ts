import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StoreThunkConfig } from 'app/store'
import { type User } from 'entities/user'

import { profileSliceName } from './profile-slice'
import { type ImagePayload } from './types'

export const fetchProfile = createAsyncThunk<User, string, StoreThunkConfig<string>>(
	`${profileSliceName}/fetchProfile`,
	async (userId, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<User>(`/users/${userId}`)
			if (!response.data) {
				throw new Error('No data')
			}
			return response.data
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	},
)

export const updateProfile = createAsyncThunk<
	User,
	Pick<User, 'id'> & Partial<Exclude<User, 'id'>>,
	StoreThunkConfig<string>
>(`${profileSliceName}/updateProfile`, async (user, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.patch<User>(`/users/${user.id}`, user)
		if (!response.data) {
			throw new Error('No data')
		}
		return response.data
	} catch (e) {
		console.log(e)
		return thunkAPI.rejectWithValue('error')
	}
})

export const updateProfileImage = createAsyncThunk<User, ImagePayload & { userId: string }, StoreThunkConfig<string>>(
	`${profileSliceName}/updateProfileImage`,
	async (payload, thunkAPI) => {
		try {
			const formData = new FormData()
			formData.append('image', payload.image)
			formData.append('type', payload.type)
			formData.append('userId', payload.userId)
			const response = await thunkAPI.extra.api.patch<User>('/users/image', formData)
			if (!response.data) {
				throw new Error('No data')
			}
			return response.data
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	},
)
