import { type Status } from 'shared/types'

import { type Article } from '../types'

export interface ArticlesState {
	articles: Article[]
	status: Status
	error: string | null
}
