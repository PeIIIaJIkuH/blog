import { type FC, lazy } from 'react'

export const AboutPageLazy = lazy<FC>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./about').then(({ AboutPage }) => ({ default: AboutPage })))
		}, 1000),
	)
})
