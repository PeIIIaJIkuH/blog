import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type LoginState } from 'features/auth-by-username/model/types'
import i18n from 'shared/config/i18n'

import { loginByUsername } from './services'

const initialState: LoginState = {
	username: '',
	password: '',
	status: 'idle',
	error: null,
}

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		},
		reset: (state) => {
			state.username = ''
			state.password = ''
			state.status = 'idle'
			state.error = null
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginByUsername.pending, (state) => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(loginByUsername.fulfilled, (state) => {
			state.status = 'success'
		})
		builder.addCase(loginByUsername.rejected, (state) => {
			state.status = 'error'
			state.error = i18n.t('login_form.error') ?? 'error'
		})
	},
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
