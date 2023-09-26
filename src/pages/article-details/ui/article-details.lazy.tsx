import { type FC, lazy } from 'react'

export const ArticleDetailsPageLazy = lazy<FC>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./article-details').then(({ ArticleDetailsPage }) => ({ default: ArticleDetailsPage })))
		}, 1000),
	)
})
