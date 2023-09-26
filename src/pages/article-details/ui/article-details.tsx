import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'

import { AddArticleComment } from 'features/add-article-comment'
import { ViewArticleComments } from 'features/view-article-comments'
import { ViewArticleDetails } from 'features/view-article-details'
import { PageError } from 'shared/ui/page-error'

import s from './article-details.module.scss'

export const ArticleDetails: FC = memo(() => {
	const { id } = useParams<{ id: string }>()

	if (!id) {
		return <PageError message='No article id' />
	}

	return (
		<div className={s.articleDetails}>
			<ViewArticleDetails articleId={id} />
			<AddArticleComment />
			<ViewArticleComments articleId={id} />
		</div>
	)
})
