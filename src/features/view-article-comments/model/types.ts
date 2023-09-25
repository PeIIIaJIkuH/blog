import { type EntityState } from '@reduxjs/toolkit'

import { type Comment } from 'entities/comment'
import { type Status } from 'shared/types'

export interface ArticleCommentsState extends EntityState<Comment> {
	status: Status
	error: string | null
}
