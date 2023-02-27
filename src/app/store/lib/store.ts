import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { userReducer, type UserState } from 'entities/user'
import { api } from 'shared/api'

import { createReducerManager } from './reducer-manager'
import { type RootState } from './types'

export const rootReducers: ReducersMapObject<RootState> = {
	user: persistReducer<UserState>(
		{
			key: 'user',
			version: 1,
			storage,
		},
		userReducer,
	),
}

const reducerManager = createReducerManager(rootReducers)

export const store = configureStore({
	reducer: reducerManager.reduce as Reducer<CombinedState<RootState>>,
	devTools: IS_DEV,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
			thunk: {
				extraArgument: {
					api,
				},
			},
		}),
})

export const persistor = persistStore(store)

// @ts-ignore
store.reducerManager = reducerManager
