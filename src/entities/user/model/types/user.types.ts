import { type User } from '../types'

export interface UserState {
	user: User | null
	rehydrated: boolean
}
