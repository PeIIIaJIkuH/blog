import { type FC } from 'react'

import { cls } from 'shared/helpers/cls'

import { type Article } from '../../model/types'

import s from './article-card.module.scss'

interface ArticleCardProps {
	className?: string
	article: Article | null
}

export const ArticleCard: FC<ArticleCardProps> = ({ className, article }) => {
	return <div className={cls(className, s.articleCard)}>article card</div>
}
