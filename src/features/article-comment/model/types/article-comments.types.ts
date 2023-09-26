import { type EntityState } from '@reduxjs/toolkit'

import { type Status } from 'shared/types'

import { type ArticleComment } from '../types'

export interface ArticleCommentsState extends EntityState<ArticleComment> {
	status: Status
	error: string | null
}
