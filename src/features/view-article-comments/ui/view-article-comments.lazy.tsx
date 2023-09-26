import { type FC, lazy } from 'react'

import { type ViewArticleCommentsProps } from './view-article-comments'

export const ViewArticleCommentsLazy = lazy<FC<ViewArticleCommentsProps>>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./view-article-comments').then(({ ViewArticleComments }) => ({ default: ViewArticleComments })))
		}, 1000),
	)
})
