import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type DecoratorFn } from '@storybook/react'
import { Provider } from 'react-redux'

import { createStoreForStorybook, type RootState, store } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

export const withStore = (
	initialState?: DeepPartialObject<RootState>,
	lazyReducers?: DeepPartialObject<ReducersMapObject<RootState>>,
) => {
	const initialStore = createStoreForStorybook(
		(initialState ?? {}) as RootState,
		lazyReducers as ReducersMapObject<RootState>,
	)

	const decorator: DecoratorFn = (Story) => (
		<Provider store={{ ...store, ...initialStore }}>
			<Story />
		</Provider>
	)
	return decorator
}
