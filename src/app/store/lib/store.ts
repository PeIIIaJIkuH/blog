import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { userReducer } from 'entities/user'
import { loginReducer } from 'features/auth-by-username'

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
	login: loginReducer,
}

export const store = configureStore({
	reducer: rootReducers,
	devTools: IS_DEV,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
