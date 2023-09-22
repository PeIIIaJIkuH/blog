import { type FC } from 'react'

import { type Article } from '../../model/types'

interface ArticleCardProps {
	article: Article | null
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
	return <div>article card</div>
}
