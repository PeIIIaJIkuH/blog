import { type FC, memo } from 'react'

import { AddArticleComment, ArticleComments } from 'features/article-comment'

interface ArticleCommentsSectionProps {
	articleId: string
}

export const ArticleCommentsSection: FC<ArticleCommentsSectionProps> = memo(({ articleId }) => {
	return (
		<>
			<AddArticleComment />
			<ArticleComments articleId={articleId} />
		</>
	)
})
