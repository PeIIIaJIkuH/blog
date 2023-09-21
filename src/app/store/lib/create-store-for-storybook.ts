import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { userReducer } from 'entities/user'
import { api } from 'shared/api'

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
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api,
					},
				},
			}),
	})
