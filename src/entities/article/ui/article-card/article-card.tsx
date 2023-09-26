import { type FC } from 'react'

import { cls } from 'shared/helpers/cls'
import { Icon } from 'shared/ui/icon'
import { Image } from 'shared/ui/image'
import { Typography } from 'shared/ui/typography'

import { renderBlock } from '../../lib/render-block'
import { type Article } from '../../model/types'

import s from './article-card.module.scss'

interface ArticleCardProps {
	className?: string
	article: Article | null
}

export const ArticleCard: FC<ArticleCardProps> = ({ className, article }) => {
	if (!article) {
		return null
	}

	return (
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
	)
}
