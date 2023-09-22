import { type Article } from 'entities/article'
import { type Status } from 'shared/types'

export interface ArticlesState {
	articles: Article[]
	status: Status
	error: string | null
}
