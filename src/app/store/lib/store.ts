import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'

import { userReducer } from 'entities/user'
import { api } from 'shared/api'

import { createReducerManager } from './reducer-manager'
import { type RootState } from './types'

export const rootReducers: ReducersMapObject<RootState> = {
	user: userReducer,
}

const reducerManager = createReducerManager(rootReducers)

export const store = configureStore({
	reducer: reducerManager.reduce as Reducer<CombinedState<RootState>>,
	devTools: IS_DEV,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api,
				},
			},
		}),
})

// @ts-ignore
store.reducerManager = reducerManager
