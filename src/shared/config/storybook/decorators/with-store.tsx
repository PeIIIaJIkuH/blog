import { type DeepPartial } from '@reduxjs/toolkit'
import { type DecoratorFn } from '@storybook/react'
import { Provider } from 'react-redux'

import { createStoreForStorybook, type RootState } from 'app/store'

export const withStore = (initialState?: DeepPartial<RootState>) => {
	const initialStore = createStoreForStorybook((initialState ?? {}) as RootState)

	const decorator: DecoratorFn = (Story) => (
		<Provider store={initialStore}>
			<Story />
		</Provider>
	)
	return decorator
}
