import { type FC } from 'react'

import { cls } from 'shared/helpers/cls'

import { type ImageBlock } from '../../model/types'

import s from './article-image-block.module.scss'

interface ArticleImageBlockProps {
	className?: string
	block: ImageBlock
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = ({ className, block }) => {
	return (
		<div className={cls(className, s.articleImageBlock)}>
			<img src={block.data.url} alt={block.data.caption} />
		</div>
	)
}
