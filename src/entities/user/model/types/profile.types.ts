import { type Status } from 'shared/types'

import { type User } from '../types'

export interface ProfileState {
	profile: User | null
	status: Status
	error: string | null
}

export interface ImagePayload {
	image: File
	type: 'avatar' | 'background'
}
