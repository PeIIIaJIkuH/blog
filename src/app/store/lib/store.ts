import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { userReducer } from 'entities/user'
import { api } from 'shared/api'

import { createReducerManager } from './reducer-manager'
import { type RootState } from './types'

export const rootReducers: ReducersMapObject<RootState> = {
	user: persistReducer(
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
	reducer: reducerManager.reduce,
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
