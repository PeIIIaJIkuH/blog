import { type FC } from 'react'

import { cls } from 'shared/helpers/cls'
import { Image } from 'shared/ui/image'
import { Typography } from 'shared/ui/typography'

import { type ImageBlock } from '../../model/types'

import s from './article-image-block.module.scss'

interface ArticleImageBlockProps {
	className?: string
	block: ImageBlock
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = ({ className, block }) => {
	return (
		<div className={cls(className, s.articleImageBlock)}>
			<Image src={block.data.url} alt={block.data.caption} fit='cover' radius='xs' width='100%' />
			{block.data.caption && <Typography className={s.caption} text={block.data.caption} size='sm' align='center' />}
		</div>
	)
}
