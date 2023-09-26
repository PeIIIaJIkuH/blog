import { type FC, lazy } from 'react'

import { type ArticleCommentsProps } from './article-comments'

export const ArticleCommentsLazy = lazy<FC<ArticleCommentsProps>>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./article-comments').then(({ ArticleComments }) => ({ default: ArticleComments })))
		}, 1000),
	)
})
