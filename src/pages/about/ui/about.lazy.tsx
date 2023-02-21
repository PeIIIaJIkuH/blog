import { lazy } from 'react'

export const AboutLazy = lazy(
	async () =>
		await new Promise((resolve) => {
			setTimeout(() => {
				// @ts-expect-error
				resolve(import('./about').then(({ About }) => ({ default: About })))
			}, 1500)
		}),
)
