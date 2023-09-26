import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { CommentCard } from 'entities/comment'
import { cls } from 'shared/helpers/cls'
import { useInitialEffect } from 'shared/hooks/use-initial-effect'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { PageError } from 'shared/ui/page-error'
import { Typography } from 'shared/ui/typography'

import { articleCommentsReducer, getArticleCommentsSelectors } from '../model/article-comments-slice'
import { getError, getStatus } from '../model/selectors'
import { fetchCommentsByArticleId } from '../model/services'

import s from './view-article-comments.module.scss'

const reducerMap: ReducerMap = {
	articleComments: articleCommentsReducer,
}

export interface ViewArticleCommentsProps {
	className?: string
	articleId: string
}

export const ViewArticleComments: FC<ViewArticleCommentsProps> = memo(({ className, articleId }) => {
	const comments = useAppSelector(getArticleCommentsSelectors.selectAll)
	const status = useAppSelector(getStatus)
	const error = useAppSelector(getError)
	const dispatch = useAppDispatch()
	const { t } = useTranslation(['translation', 'article-details'])

	useLazyModuleLoading(reducerMap)

	useInitialEffect(() => {
		void dispatch(fetchCommentsByArticleId(articleId))
	})

	if (status === 'loading') {
		return (
			<div className={cls(className, s.viewArticleComments)}>
				<Typography as='h2' text={t('comments.title', { ns: 'article-details' })} size='xl' weight='bold' />
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
			</div>
		)
	}

	if (status === 'error') {
		return <PageError message={error ? t(error, { ns: 'article-details' }) : t('errors.general')} />
	}

	return (
		<div className={cls(className, s.viewArticleComments)}>
			<Typography as='h2' text={t('comments.title', { ns: 'article-details' })} size='xl' weight='bold' />
			{comments.length ? (
				comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
			) : (
				<Typography as='span' text={t('errors.no_comments', { ns: 'article-details' })} />
			)}
		</div>
	)
})
