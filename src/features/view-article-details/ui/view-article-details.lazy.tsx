import { type FC, lazy } from 'react'

import { type ViewArticleDetailsProps } from './view-article-details'

export const ViewArticleDetailsLazy = lazy<FC<ViewArticleDetailsProps>>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./view-article-details').then(({ ViewArticleDetails }) => ({ default: ViewArticleDetails })))
		}, 1000),
	)
})
