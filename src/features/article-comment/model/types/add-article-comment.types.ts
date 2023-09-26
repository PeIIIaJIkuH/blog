import { type Status } from 'shared/types'

export interface AddArticleCommentState {
	comment: string
	status: Status
	error: string | null
}
