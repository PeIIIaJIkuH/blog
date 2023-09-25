import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { CommentCard } from 'entities/comment'
import { cls } from 'shared/helpers/cls'
import { useInitialEffect } from 'shared/hooks/use-initial-effect'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { Typography } from 'shared/ui/typography'

import { articleCommentsReducer, getArticleCommentsSelectors } from '../model/article-comments-slice'
import { fetchCommentsByArticleId } from '../model/services'

import s from './view-article-comments.module.scss'

const reducerMap: ReducerMap = {
	articleComments: articleCommentsReducer,
}

interface ViewArticleCommentsProps {
	className?: string
	articleId: string
}

export const ViewArticleComments: FC<ViewArticleCommentsProps> = memo(({ className, articleId }) => {
	const { t } = useTranslation('article-details')
	const comments = useAppSelector(getArticleCommentsSelectors.selectAll)
	const dispatch = useAppDispatch()

	useLazyModuleLoading(reducerMap)

	useInitialEffect(() => {
		void dispatch(fetchCommentsByArticleId(articleId))
	})

	return (
		<div className={cls(className, s.viewArticleComments)}>
			<Typography as='h2' text={t('comments.title')} size='xl' weight='bold' />
			{comments.length ? (
				comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
			) : (
				<Typography as='span' text={t('comments.no_comments')} />
			)}
		</div>
	)
})
