import { type FC, memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { ArticleCard } from 'entities/article'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { PageError } from 'shared/ui/page-error'
import { PageLoader } from 'shared/ui/page-loader'

import { articleDetailsReducer } from '../model/article-details-slice'
import { getArticle, getError, getStatus } from '../model/selectors'
import { fetchArticle } from '../model/services'

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

	const { t } = useTranslation(['translation', 'article-details'])

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
		return <PageError message={error ? t(error, { ns: 'article-details' }) : t('errors.general')} />
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
