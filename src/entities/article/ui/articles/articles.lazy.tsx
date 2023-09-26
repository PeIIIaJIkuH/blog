import { type FC, lazy } from 'react'

import { type ArticlesProps } from './articles'

export const ArticlesLazy = lazy<FC<ArticlesProps>>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./articles').then(({ Articles }) => ({ default: Articles })))
		}, 1000),
	)
})
