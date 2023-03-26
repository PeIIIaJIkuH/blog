export interface Profile {
	firstName: string
	lastName: string
	birthDate: string
	email: string
	username: string
	country: string
	city: string
	avatarImage: string | null
	backgroundImage: string | null
	currency: string
	balance: number
}

export type ProfileStatus = 'idle' | 'loading' | 'success' | 'error'
