export interface User {
	id: string
	username: string
	role: 'admin' | 'user'
	avatarUrl: string | null
}

export interface UserState {
	user: User | null
}
