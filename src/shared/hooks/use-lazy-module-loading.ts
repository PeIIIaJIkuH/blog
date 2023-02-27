import { type Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useStore } from 'react-redux'

import { type RootStateKeys, type StoreWithReducerManager, useAppDispatch } from 'app/store'

export type ReducerMap = Partial<Record<RootStateKeys, Reducer>>

export const useLazyModuleLoading = (map: ReducerMap) => {
	const store = useStore() as StoreWithReducerManager
	const dispatch = useAppDispatch()

	useEffect(() => {
		for (const [key, reducer] of Object.entries(map)) {
			store.reducerManager.add(key as RootStateKeys, reducer)
		}
		dispatch({ type: `INIT ${Object.keys(map).join(', ')}` })

		return () => {
			for (const key of Object.keys(map)) {
				store.reducerManager.remove(key as RootStateKeys)
			}
			dispatch({ type: `DESTROY ${Object.keys(map).join(', ')}` })
		}
	}, [dispatch, map, store.reducerManager])
}
