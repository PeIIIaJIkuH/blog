import { type Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useStore } from 'react-redux'

import { type RootStateKeys, type StoreWithReducerManager, useAppDispatch } from 'app/store'

export type ReducerMap = Partial<Record<RootStateKeys, Reducer>>
type ReducerMapEntry = [RootStateKeys, Reducer]

export const useLazyModuleLoading = (map: ReducerMap) => {
	const store = useStore() as StoreWithReducerManager
	const dispatch = useAppDispatch()

	useEffect(() => {
		Object.entries(map).forEach(([key, reducer]: ReducerMapEntry) => {
			store.reducerManager.add(key, reducer)
		})
		dispatch({ type: `INIT ${Object.keys(map).join(', ')}` })

		return () => {
			Object.keys(map).forEach((key: RootStateKeys) => {
				store.reducerManager.remove(key)
			})
			dispatch({ type: `DESTROY ${Object.keys(map).join(', ')}` })
		}
	}, [dispatch, map, store.reducerManager])
}
