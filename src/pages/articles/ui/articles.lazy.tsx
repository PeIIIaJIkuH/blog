import { type FC, lazy } from 'react'

export const ArticlesLazy = lazy<FC>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./articles').then(({ Articles }) => ({ default: Articles })))
		}, 1000),
	)
})
