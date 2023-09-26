import { type Status } from 'shared/types'

import { type Article } from '../types'

export interface ArticleDetailsState {
	article: Article | null
	status: Status
	error: string | null
}
