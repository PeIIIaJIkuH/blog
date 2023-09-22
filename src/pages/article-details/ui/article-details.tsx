import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'

import { ViewArticleDetails } from 'features/view-article-details'

interface ArticleDetailsProps {
	className?: string
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className }) => {
	const { id } = useParams<{ id: string }>()

	if (!id) {
		return <div>not found</div>
	}

	return (
		<div className={className}>
			<ViewArticleDetails articleId={id} />
		</div>
	)
})
