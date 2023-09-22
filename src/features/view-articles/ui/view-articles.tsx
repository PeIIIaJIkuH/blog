import { type FC, memo } from 'react'

import { useAppSelector } from 'app/store'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { PageLoader } from 'shared/ui/page-loader'

import { articlesReducer } from '../model/articles-slice'
import { getArticles, getError, getStatus } from '../model/selectors'

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
		return <div>{error}</div>
	}

	if (!articles && status === 'success') {
		return <div>not found</div>
	}

	return (
		<div className={className}>
			<div>articles</div>
		</div>
	)
})
