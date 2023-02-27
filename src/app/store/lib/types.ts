import {
	type AnyAction,
	type CombinedState,
	type EnhancedStore,
	type Reducer,
	type ReducersMapObject,
} from '@reduxjs/toolkit'

import { type ProfileState } from 'entities/profile'
import { type UserState } from 'entities/user'
import { type LoginState } from 'features/auth-by-username'

import { type store } from './store'

export interface RootState {
	user: UserState
	login?: LoginState
	profile?: ProfileState
}

export type RootStateKeys = keyof RootState

export type AppDispatch = typeof store.dispatch

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<RootState>
	reduce: (state: RootState, action: AnyAction) => CombinedState<RootState>
	add: (key: RootStateKeys, reducer: Reducer) => void
	remove: (key: RootStateKeys) => void
}

export interface StoreWithReducerManager extends EnhancedStore<RootState> {
	reducerManager: ReducerManager
}
