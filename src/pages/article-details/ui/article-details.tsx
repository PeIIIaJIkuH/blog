import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'

import { ArticleDetails } from 'entities/article'
import { PageError } from 'shared/ui/page-error'
import { ArticleCommentsSection } from 'widgets/article-comments-section'

import s from './article-details.module.scss'

export const ArticleDetailsPage: FC = memo(() => {
	const { id } = useParams<{ id: string }>()

	if (!id) {
		return <PageError message='No article id' />
	}

	return (
		<div className={s.articleDetailsPage}>
			<ArticleDetails articleId={id} />
			<ArticleCommentsSection articleId={id} />
		</div>
	)
})
