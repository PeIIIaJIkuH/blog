import { type UserState } from 'entities/user'
import { type LoginState } from 'features/auth-by-username'

import { type store } from './store'

export interface RootState {
	user: UserState
	login: LoginState
}

export type RootStateKeys = keyof RootState

export type AppDispatch = typeof store.dispatch
