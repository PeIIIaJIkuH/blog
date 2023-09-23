import { type FC } from 'react'

import { cls } from 'shared/helpers/cls'

import { type TextBlock } from '../../model/types'

import s from './article-text-block.module.scss'

interface ArticleTextBlockProps {
	className?: string
	block: TextBlock
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className, block }) => {
	return (
		<div className={cls(className, s.articleTextBlock)}>
			{block.data.content.map((item, index) => (
				<div key={index}>{item}</div>
			))}
		</div>
	)
}
