import { type FC, memo, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'app/store'
import { ArticleCard } from 'entities/article'
import { cls } from 'shared/helpers/cls'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { PageLoader } from 'shared/ui/page-loader'

import { articleDetailsReducer } from '../model/article-details-slice'
import { getArticle, getError, getStatus } from '../model/selectors'
import { fetchArticle } from '../model/services'

import s from './view-article-details.module.scss'

interface ViewArticleDetailsProps {
	className?: string
	articleId: string
}

const reducerMap: ReducerMap = {
	articleDetails: articleDetailsReducer,
}

export const ViewArticleDetails: FC<ViewArticleDetailsProps> = memo(({ className, articleId }) => {
	const article = useAppSelector(getArticle)
	const status = useAppSelector(getStatus)
	const error = useAppSelector(getError)
	const dispatch = useAppDispatch()

	useLazyModuleLoading(reducerMap)

	useEffect(() => {
		if (PROJECT !== 'storybook') {
			void dispatch(fetchArticle(articleId))
		}
	}, [articleId, dispatch])

	if (status === 'loading') {
		return <PageLoader />
	}

	if (status === 'error') {
		return <div>{error}</div>
	}

	if (!article && status === 'success') {
		return <div>not found</div>
	}

	return (
		<div className={cls(className, s.viewArticleDetails)}>
			<ArticleCard article={article} />
		</div>
	)
})
