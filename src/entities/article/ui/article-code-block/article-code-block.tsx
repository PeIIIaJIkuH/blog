import { type FC } from 'react'

import { cls } from 'shared/helpers/cls'

import { type CodeBlock } from '../../model/types'

import s from './article-code-block.module.scss'

interface ArticleCodeBlockProps {
	className?: string
	block: CodeBlock
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ className, block }) => {
	return (
		<div className={cls(className, s.articleCodeBlock)}>
			<pre>
				<code>{block.data.code}</code>
			</pre>
		</div>
	)
}
