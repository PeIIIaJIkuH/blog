import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { CommentCard, type Comment } from 'entities/comment'
import { cls } from 'shared/helpers/cls'
import { Typography } from 'shared/ui/typography'

import s from './view-comments.module.scss'

interface ViewCommentsProps {
	className?: string
}

export const ViewComments: FC<ViewCommentsProps> = memo(({ className }) => {
	const { t } = useTranslation('article-details')
	const comments: Comment[] = [
		{
			id: '1',
			articleId: '1',
			user: {
				id: '1',
				username: 'user1',
				role: 'user',
				avatarUrl: 'http://localhost:8000/uploads/image-1695175702646.jpg',
			},
			content: 'First comment content',
		},
		{
			id: '2',
			articleId: '1',
			user: {
				id: '1',
				username: 'user1',
				role: 'user',
				avatarUrl: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
			},
			content: 'Second comment content',
		},
	]

	return (
		<div className={cls(className, s.viewComments)}>
			<Typography as='h2' text={t('comments.title')} size='xl' weight='bold' />
			{comments.length ? (
				comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
			) : (
				<Typography as='span' text={t('comments.no_comments')} />
			)}
		</div>
	)
})
