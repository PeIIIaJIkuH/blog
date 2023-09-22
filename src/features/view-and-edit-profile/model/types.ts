import { type Profile } from 'entities/profile'
import { type ProfileStatus } from 'entities/profile/model/types'

export interface ProfileState {
	profile: Profile | null
	status: ProfileStatus
	error: string | null
}
