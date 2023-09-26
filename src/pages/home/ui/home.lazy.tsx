import { type FC, lazy } from 'react'

export const HomePageLazy = lazy<FC>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./home').then(({ HomePage }) => ({ default: HomePage })))
		}, 1000),
	)
})
