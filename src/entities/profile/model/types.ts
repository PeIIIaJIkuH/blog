export interface Profile {
	firstName: string
	lastName: string
	birthDate: string
	email: string
	username: string
	location: {
		country: string
		city: string
	}
	avatar: string
	currency: string
}

export interface ProfileState {
	profile: Profile | null
	status: 'idle' | 'loading' | 'success' | 'error'
	error: string | null
	readOnly: boolean
}
