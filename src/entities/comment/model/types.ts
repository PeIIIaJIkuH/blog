// eslint-disable-next-line boundaries/element-types -- This is a type definition file, not a module
import { type User } from 'entities/user'

export interface Comment {
	id: string
	content: string
	user: User
	articleId: string
}
