import { lazy } from 'react'

export const HomeLazy = lazy(
	async () =>
		await new Promise((resolve) => {
			setTimeout(() => {
				// @ts-expect-error
				resolve(import('./home').then(({ Home }) => ({ default: Home })))
			}, 1500)
		}),
)
