import { lazy } from 'react'

export const AboutPageLazy = lazy(
	async () =>
		await new Promise((resolve) => {
			setTimeout(() => {
				// @ts-expect-error
				resolve(import('./AboutPage').then(({ AboutPage }) => ({ default: AboutPage })))
			}, 1500)
		}),
)
