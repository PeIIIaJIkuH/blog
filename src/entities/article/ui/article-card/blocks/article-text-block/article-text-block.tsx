import { type FC } from 'react'

import { cls } from 'shared/helpers/cls'
import { Typography } from 'shared/ui/typography'

import { type TextBlock } from '../../../../model/types'

import s from './article-text-block.module.scss'

interface ArticleTextBlockProps {
	className?: string
	block: TextBlock
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className, block }) => {
	return (
		<div className={cls(className, s.articleTextBlock)}>
			{block.data.title && <Typography text={block.data.title} as='h3' weight='bold' size='lg' align='center' />}
			{block.data.content.map((item, index) => (
				<Typography text={item} key={index} className={s.paragraph} />
			))}
		</div>
	)
}
