import { type Article } from 'entities/article'
import { type Status } from 'shared/types'

export interface ArticleDetailsState {
	article: Article | null
	status: Status
	error: string | null
}
