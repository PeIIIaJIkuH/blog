import { type AnyAction, combineReducers, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'

import { type RootState } from 'app/store'

import { type ReducerManager, type RootStateKeys } from './types'

export const createReducerManager = (initialReducers: ReducersMapObject<RootState>): ReducerManager => {
	const reducers = { ...initialReducers }

	let combinedReducer = combineReducers(reducers)

	let keysToRemove: RootStateKeys[] = []

	return {
		getReducerMap: () => reducers,

		reduce: (state: RootState, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state }
				for (const key of keysToRemove) {
					delete state[key]
				}
				keysToRemove = []
			}

			return combinedReducer(state, action)
		},

		add: (key: RootStateKeys, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return
			}

			reducers[key] = reducer

			combinedReducer = combineReducers(reducers)
		},

		remove: (key: RootStateKeys) => {
			if (!key || !reducers[key]) {
				return
			}

			delete reducers[key]

			keysToRemove.push(key)

			combinedReducer = combineReducers(reducers)
		},
	}
}
