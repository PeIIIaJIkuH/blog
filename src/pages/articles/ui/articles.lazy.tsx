import { type FC, lazy } from 'react'

export const ArticlesLazy = lazy<FC>(
	async () => await import('./articles').then(({ Articles }) => ({ default: Articles })),
)
