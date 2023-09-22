import { type Profile } from 'entities/profile'
import { type Status } from 'shared/types'

export interface ProfileState {
	profile: Profile | null
	status: Status
	error: string | null
}
