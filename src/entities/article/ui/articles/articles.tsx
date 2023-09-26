import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'app/store'
import { cls } from 'shared/helpers/cls'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { PageError } from 'shared/ui/page-error'
import { PageLoader } from 'shared/ui/page-loader'

import { getArticlesArticles, getArticlesStatus, getArticlesError } from '../../model/selectors/articles.selectors'
import { articlesReducer } from '../../model/slices/articles.slice'

import s from './articles.module.scss'

export interface ArticlesProps {
	className?: string
}

const reducerMap: ReducerMap = {
	articles: articlesReducer,
}

export const Articles: FC<ArticlesProps> = memo(({ className }) => {
	const articles = useAppSelector(getArticlesArticles)
	const status = useAppSelector(getArticlesStatus)
	const error = useAppSelector(getArticlesError)

	const { t } = useTranslation('articles')

	useLazyModuleLoading(reducerMap)

	if (status === 'loading') {
		return <PageLoader />
	}

	if (status === 'error') {
		return <PageError message={error} />
	}

	if (!articles && status === 'success') {
		return <PageError message='No articles' />
	}

	return (
		<div className={cls(className, s.articles)}>
			<div>{t('title')}</div>
		</div>
	)
})
