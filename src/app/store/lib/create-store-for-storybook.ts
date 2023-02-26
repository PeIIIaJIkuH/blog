import { configureStore } from '@reduxjs/toolkit'

import { userReducer } from 'entities/user'

import { rootReducers } from './store'
import { type RootState } from './types'

export const createStoreForStorybook = (preloadedState: RootState) =>
	configureStore({
		reducer: {
			...rootReducers,
			user: userReducer,
		},
		devTools: IS_DEV,
		preloadedState,
	})
