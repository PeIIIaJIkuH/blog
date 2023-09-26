import { type FC, lazy } from 'react'

export const ArticlesPageLazy = lazy<FC>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./articles').then(({ ArticlesPage }) => ({ default: ArticlesPage })))
		}, 1000),
	)
})
