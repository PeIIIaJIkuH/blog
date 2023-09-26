import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { useInitialEffect } from 'shared/hooks/use-initial-effect'
import { useLazyModuleLoading, type ReducerMap } from 'shared/hooks/use-lazy-module-loading'
import { PageError } from 'shared/ui/page-error'
import { PageLoader } from 'shared/ui/page-loader'

import {
	getArticleDetailsArticle,
	getArticleDetailsStatus,
	getArticleDetailsError,
} from '../../model/selectors/article-details.selectors'
import { fetchArticle } from '../../model/services/article-details.services'
import { articleDetailsReducer } from '../../model/slices/article-details.slice'
import { ArticleCard } from '../article-card/article-card'

export interface ArticleDetailsProps {
	className?: string
	articleId: string
}

const reducerMap: ReducerMap = {
	articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className, articleId }) => {
	const article = useAppSelector(getArticleDetailsArticle)
	const status = useAppSelector(getArticleDetailsStatus)
	const error = useAppSelector(getArticleDetailsError)
	const dispatch = useAppDispatch()

	const { t } = useTranslation(['translation', 'article-details'])

	useLazyModuleLoading(reducerMap)

	useInitialEffect(() => {
		void dispatch(fetchArticle(articleId))
	})

	if (status === 'loading') {
		return <PageLoader />
	}

	if (status === 'error') {
		return <PageError message={error ? t(`article-details:${error}`) : t('errors.general')} />
	}

	if (!article && status === 'success') {
		return <PageError message='No article' />
	}

	return (
		<div className={className}>
			<ArticleCard article={article} />
		</div>
	)
})
