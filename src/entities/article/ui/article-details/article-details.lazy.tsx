import { type FC, lazy } from 'react'

import { type ArticleDetailsProps } from './article-details'

export const ArticleDetailsLazy = lazy<FC<ArticleDetailsProps>>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./article-details').then(({ ArticleDetails }) => ({ default: ArticleDetails })))
		}, 1000),
	)
})
