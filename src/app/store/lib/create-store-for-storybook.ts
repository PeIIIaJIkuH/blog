import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { userReducer } from 'entities/user'

import { rootReducers } from './store'
import { type RootState } from './types'

export const createStoreForStorybook = (preloadedState: RootState, lazyReducers?: ReducersMapObject<RootState>) =>
	configureStore({
		reducer: {
			...lazyReducers,
			...rootReducers,
			user: userReducer,
		},
		devTools: IS_DEV,
		preloadedState,
	})
