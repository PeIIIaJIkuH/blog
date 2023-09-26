import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { cls } from 'shared/helpers/cls'
import { useInitialEffect } from 'shared/hooks/use-initial-effect'
import { useLazyModuleLoading, type ReducerMap } from 'shared/hooks/use-lazy-module-loading'
import { Icon } from 'shared/ui/icon'
import { Image } from 'shared/ui/image'
import { PageError } from 'shared/ui/page-error'
import { PageLoader } from 'shared/ui/page-loader'
import { Typography } from 'shared/ui/typography'

import { renderBlock } from '../../lib/render-block'
import {
	getArticleDetailsArticle,
	getArticleDetailsStatus,
	getArticleDetailsError,
} from '../../model/selectors/article-details.selectors'
import { fetchArticle } from '../../model/services/article-details.services'
import { articleDetailsReducer } from '../../model/slices/article-details.slice'

import s from './article-details.module.scss'

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

	if (status === 'loading' || !article) {
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
			<div className={cls(className, s.articleCard)}>
				<div className={s.imageWrapper}>
					<Image
						src={article.imgUrl ?? ''}
						alt='Article image'
						className={s.image}
						fit='cover'
						radius='xs'
						width='100%'
						height={400}
					/>
					<div className={s.info}>
						<div className={s.section}>
							<Typography text={article.title} as='h1' size='xxl' weight='bold' color='light' />
							<div className={s.withIcon}>
								<Typography text={article.createdAt} color='info' />
								<Icon type='calendar' color='info' />
							</div>
						</div>
						<div className={s.section}>
							<Typography text={article.subtitle} as='h2' size='lg' color='info' />
							<div className={s.withIcon}>
								<Typography text={String(article.views)} color='info' />
								<Icon type='eye' color='info' />
							</div>
						</div>
					</div>
				</div>
				<div className={s.tags}>
					{article.tags.map((tag, index) => (
						<div className={s.tag} key={index}>
							<Typography text={tag} size='sm' />
						</div>
					))}
				</div>
				<div className={s.blocks}>{article.blocks.map((block, index) => renderBlock({ block, index }))}</div>
			</div>
		</div>
	)
})
