import { type User } from 'entities/user'
import { type Status } from 'shared/types'

export interface ProfileState {
	profile: User | null
	status: Status
	error: string | null
}

export interface ImagePayload {
	image: File
	type: 'avatar' | 'background'
}
