import { type FC, memo } from 'react'

import { cls } from 'shared/helpers/cls'
import { Image } from 'shared/ui/image'
import { Typography } from 'shared/ui/typography'

import { type Comment } from '../../model/types'

import s from './comment-card.module.scss'

interface CommentCardProps {
	className?: string
	comment: Comment
}

export const CommentCard: FC<CommentCardProps> = memo(({ className, comment }) => {
	return (
		<div className={cls(className, s.commentCard)}>
			<div className={s.header}>
				{comment.user.avatarUrl ? (
					<Image className={s.avatar} src={comment.user.avatarUrl} alt={comment.user.username} height='2rem' circle />
				) : (
					<Typography as='span' className={s.avatarPlaceholder} text={comment.user.username[0]} weight={500} />
				)}
				<Typography as='div' text={comment.user.username} weight={500} size='lg' />
			</div>
			<Typography as='div' className={s.content} text={comment.content} />
		</div>
	)
})
