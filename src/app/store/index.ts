import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { userReducer, type UserState } from 'entities/user'
import { loginReducer, type LoginState } from 'features/auth-by-username'

export interface RootState {
	user: UserState
	login: LoginState
}

const rootReducers: ReducersMapObject<RootState> = {
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

export type AppDispatch = typeof store.dispatch

export const createStoreForStorybook = (preloadedState: RootState) =>
	configureStore({
		reducer: {
			...rootReducers,
			user: userReducer,
		},
		devTools: IS_DEV,
		preloadedState,
	})
