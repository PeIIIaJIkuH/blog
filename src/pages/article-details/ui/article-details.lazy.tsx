import { type FC, lazy } from 'react'

export const ArticleDetailsLazy = lazy<FC>(
	async () => await import('./article-details').then(({ ArticleDetails }) => ({ default: ArticleDetails })),
)
