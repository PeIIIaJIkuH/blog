import { type Reducer } from '@reduxjs/toolkit'
import { useEffect, useMemo } from 'react'
import { useStore } from 'react-redux'

import { type RootStateKeys, type StoreWithReducerManager, useAppDispatch } from 'app/store'

export type ReducerMap = Partial<Record<RootStateKeys, Reducer>>

export const useLazyModuleLoading = (map: ReducerMap) => {
	const store = useStore() as StoreWithReducerManager
	const dispatch = useAppDispatch()
	const keys = useMemo(() => Object.keys(map), [map])
	const entries = useMemo(() => Object.entries(map), [map])

	useEffect(() => {
		for (const [key, reducer] of entries) {
			store.reducerManager.add(key as RootStateKeys, reducer)
		}
		dispatch({ type: `INIT ${keys.join(', ')}` })

		return () => {
			for (const key of keys) {
				store.reducerManager.remove(key as RootStateKeys)
			}
			dispatch({ type: `DESTROY ${keys.join(', ')}` })
		}
	}, [dispatch, entries, keys, store.reducerManager])
}
