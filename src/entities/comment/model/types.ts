import { type User } from 'entities/user'

export interface Comment {
	id: string
	content: string
	user: User
	articleId: string
}
