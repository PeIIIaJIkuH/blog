import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StoreThunkConfig } from 'app/store'
import { type User, userActions } from 'entities/user'

import { type LoginPayload } from './types'

const sliceName = 'login'

export const loginByUsername = createAsyncThunk<User, LoginPayload, StoreThunkConfig<string>>(
	`${sliceName}/loginByUsername`,
	async (payload, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.post<User>('/login', {
				username: payload.username,
				password: payload.password,
			})
			if (!response.data) {
				throw new Error('No data')
			}
			thunkAPI.dispatch(userActions.setUser(response.data))
			return response.data
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	},
)
