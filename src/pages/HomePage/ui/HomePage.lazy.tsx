import { lazy } from 'react'

export const HomePageLazy = lazy(
	async () =>
		await new Promise((resolve) => {
			setTimeout(() => {
				// @ts-expect-error
				resolve(import('./HomePage').then(({ HomePage }) => ({ default: HomePage })))
			}, 1500)
		}),
)
