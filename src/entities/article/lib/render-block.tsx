import { type ArticleBlock } from '../model/types'
import { ArticleCodeBlock } from '../ui/article-card/blocks/article-code-block/article-code-block'
import { ArticleImageBlock } from '../ui/article-card/blocks/article-image-block/article-image-block'
import { ArticleTextBlock } from '../ui/article-card/blocks/article-text-block/article-text-block'

interface RenderBlockProps {
	block: ArticleBlock
	index: number
	className?: string
}

export const renderBlock = ({ block, index, className }: RenderBlockProps) => {
	switch (block.type) {
		case 'text':
			return <ArticleTextBlock key={index} block={block} className={className} />
		case 'image':
			return <ArticleImageBlock key={index} block={block} className={className} />
		case 'code':
			return <ArticleCodeBlock key={index} block={block} className={className} />
		default:
			return null
	}
}
