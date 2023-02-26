import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { type User, userActions } from 'entities/user'

interface LoginPayload {
	username: string
	password: string
}

const sliceName = 'login'

export const loginByUsername = createAsyncThunk<User, LoginPayload, { rejectValue: string }>(
	`${sliceName}/loginByUsername`,
	async (payload, thunkAPI) => {
		try {
			const response = await axios.post('http://localhost:8000/login', {
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
