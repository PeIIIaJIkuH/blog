import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'

import { ArticleDetails } from 'entities/article'
import { AddArticleComment } from 'features/add-article-comment'
import { ViewArticleComments } from 'features/view-article-comments'
import { PageError } from 'shared/ui/page-error'

import s from './article-details.module.scss'

export const ArticleDetailsPage: FC = memo(() => {
	const { id } = useParams<{ id: string }>()

	if (!id) {
		return <PageError message='No article id' />
	}

	return (
		<div className={s.articleDetailsPage}>
			<ArticleDetails articleId={id} />
			<AddArticleComment />
			<ViewArticleComments articleId={id} />
		</div>
	)
})
