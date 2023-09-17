import { type FC, lazy } from 'react'

export const AboutLazy = lazy<FC>(
	async () =>
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(import('./about').then(({ About }) => ({ default: About })))
			}, 0)
		}),
)
