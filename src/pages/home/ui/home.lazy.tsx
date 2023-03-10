import { type FC, lazy } from 'react'

export const HomeLazy = lazy<FC>(
	async () =>
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(import('./home').then(({ Home }) => ({ default: Home })))
			}, 1500)
		}),
)
