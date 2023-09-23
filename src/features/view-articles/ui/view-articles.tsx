import { type FC, memo } from 'react'

import { useAppSelector } from 'app/store'
import { cls } from 'shared/helpers/cls'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { PageError } from 'shared/ui/page-error'
import { PageLoader } from 'shared/ui/page-loader'

import { articlesReducer } from '../model/articles-slice'
import { getArticles, getError, getStatus } from '../model/selectors'

import s from './view-articles.module.scss'

interface ViewArticlesProps {
	className?: string
}

const reducerMap: ReducerMap = {
	articles: articlesReducer,
}

export const ViewArticles: FC<ViewArticlesProps> = memo(({ className }) => {
	const articles = useAppSelector(getArticles)
	const status = useAppSelector(getStatus)
	const error = useAppSelector(getError)

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
		<div className={cls(className, s.viewArticles)}>
			<div>articles</div>
		</div>
	)
})
