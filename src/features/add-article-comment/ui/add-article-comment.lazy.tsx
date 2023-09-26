import { type FC, lazy } from 'react'

export const AddArticleCommentLazy = lazy<FC>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./add-article-comment').then(({ AddArticleComment }) => ({ default: AddArticleComment })))
		}, 1000),
	)
})
