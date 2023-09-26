import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { CommentCard } from 'entities/comment'
import { cls } from 'shared/helpers/cls'
import { useInitialEffect } from 'shared/hooks/use-initial-effect'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { PageError } from 'shared/ui/page-error'
import { Typography } from 'shared/ui/typography'

import { getArticleCommentsStatus, getArticleCommentsError } from '../../model/selectors/article-comments.selectors'
import { fetchCommentsByArticleId } from '../../model/services/article-comments.services'
import { articleCommentsReducer, getArticleCommentsSelectors } from '../../model/slices/article-comments.slice'

import s from './article-comments.module.scss'

const reducerMap: ReducerMap = {
	articleComments: articleCommentsReducer,
}

export interface ArticleCommentsProps {
	className?: string
	articleId: string
}

export const ArticleComments: FC<ArticleCommentsProps> = memo(({ className, articleId }) => {
	const comments = useAppSelector(getArticleCommentsSelectors.selectAll)
	const status = useAppSelector(getArticleCommentsStatus)
	const error = useAppSelector(getArticleCommentsError)
	const dispatch = useAppDispatch()
	const { t } = useTranslation(['translation', 'article-details'])

	useLazyModuleLoading(reducerMap)

	useInitialEffect(() => {
		void dispatch(fetchCommentsByArticleId(articleId))
	})

	if (status === 'loading') {
		return (
			<div className={cls(className, s.articleComments)}>
				<Typography as='h2' text={t('article-details:comments.title')} size='xl' weight='bold' />
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
			</div>
		)
	}

	if (status === 'error') {
		return <PageError message={error ? t(`article-details:${error}`) : t('errors.general')} />
	}

	return (
		<div className={cls(className, s.articleComments)}>
			<Typography as='h2' text={t('article-details:comments.title')} size='xl' weight='bold' />
			{comments.length ? (
				comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
			) : (
				<Typography as='span' text={t('article-details:errors.no_comments')} />
			)}
		</div>
	)
})
