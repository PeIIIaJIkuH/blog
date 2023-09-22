export interface User {
	id: string
	username: string
	role: 'admin' | 'user'
}

export interface UserState {
	user: User | null
}
