import { useCallback, type FC } from 'react'

import CopyIcon from 'shared/assets/icons/copy.svg'
import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/button'
import { Typography } from 'shared/ui/typography'

import { type CodeBlock } from '../../model/types'

import s from './article-code-block.module.scss'

interface ArticleCodeBlockProps {
	className?: string
	block: CodeBlock
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ className, block }) => {
	const onCopy = useCallback(async () => {
		await navigator.clipboard.writeText(block.data.code)
	}, [block.data.code])

	return (
		<pre className={cls(className, s.articleCodeBlock)}>
			<Button className={s.copyButton} onClick={onCopy} variant='link' icon>
				<CopyIcon />
			</Button>
			{block.data.code.split('\n').map((line, index) => (
				<div key={index} className={s.line}>
					<Typography as='span' className={s.lineNumber} text={`${index + 1}`} align='right' />
					<Typography as='span' className={s.lineContent} text={line} />
				</div>
			))}
		</pre>
	)
}
