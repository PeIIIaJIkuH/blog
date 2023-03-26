import {
	type AnyAction,
	type CombinedState,
	type EnhancedStore,
	type Reducer,
	type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'

import { type UserState } from 'entities/user'
import { type LoginState } from 'features/auth-by-username'
import { type ProfileState } from 'features/view-and-edit-profile'

import { type store } from './store'

interface PersistPartial {
	_persist: {
		version: number
		rehydrated: boolean
	}
}

export interface RootState {
	user: UserState & PersistPartial
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

export interface StoreThunkExtra {
	api: AxiosInstance
}

export interface StoreThunkConfig<T> {
	rejectValue: T
	extra: StoreThunkExtra
}
