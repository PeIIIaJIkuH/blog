import { type FC, lazy } from 'react'

import { type ViewArticlesProps } from './view-articles'

export const ViewArticlesLazy = lazy<FC<ViewArticlesProps>>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./view-articles').then(({ ViewArticles }) => ({ default: ViewArticles })))
		}, 1000),
	)
})
