import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { Icon } from 'shared/ui/icon'
import { Image } from 'shared/ui/image'
import { Typography } from 'shared/ui/typography'

import { type Article } from '../../model/types'

import s from './article-cards.module.scss'

export interface ArticleCardsProps {
	className?: string
	articles: Article[]
	view: 'grid' | 'list'
}

export const ArticleCards: FC<ArticleCardsProps> = memo(({ className, articles, view }) => {
	const { t } = useTranslation('articles')

	return (
		<div className={cls(className)}>
			{articles.length ? (
				articles.map((article) => (
					<div className={s.card} key={article.id}>
						<div className={s.imageWrapper}>
							<Image src={article.imgUrl} alt={article.title} width='100%' />
							<div className={s.withIcon}>
								<Icon type='eye' size='sm' />
								<Typography as='span' text={String(article.views)} className={s.views} />
							</div>
							<div className={cls(s.withIcon, s.right)}>
								<Typography as='span' text={article.createdAt} />
								<Icon type='calendar' size='sm' />
							</div>
						</div>
						{article.tags.length ? (
							<div className={s.tags}>
								{article.tags.map((tag) => (
									<Typography as='span' text={tag} className={s.tag} key={tag} size='xs' />
								))}
							</div>
						) : null}
						<Typography as='h3' text={article.title} size='lg' weight='bold' />
					</div>
				))
			) : (
				<Typography as='span' text={t('articles:errors.no_articles')} />
			)}
		</div>
	)
})
