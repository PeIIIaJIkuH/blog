export interface User {
	id: string
	username: string
	role: 'admin' | 'user'
	firstName: string
	lastName: string
	birthDate: string
	email: string
	country: string
	city: string
	avatarUrl: string | null
	backgroundUrl: string | null
	currency: string
	balance: number
}
