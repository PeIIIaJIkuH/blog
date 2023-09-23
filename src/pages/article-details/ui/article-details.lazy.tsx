import { type FC, lazy } from 'react'

export const ArticleDetailsLazy = lazy<FC>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./article-details').then(({ ArticleDetails }) => ({ default: ArticleDetails })))
		}, 1000),
	)
})
