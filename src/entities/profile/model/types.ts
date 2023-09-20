export interface Profile {
	firstName: string
	lastName: string
	birthDate: string
	email: string
	username: string
	country: string
	city: string
	avatarUrl: string | null
	backgroundUrl: string | null
	currency: string
	balance: number
}

export type ProfileStatus = 'idle' | 'loading' | 'success' | 'error'

export interface ImagePayload {
	image: File
	type: 'avatar' | 'background'
}
