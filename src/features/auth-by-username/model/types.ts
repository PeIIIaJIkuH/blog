export interface LoginState {
	username: string
	password: string
	status: 'idle' | 'loading' | 'success' | 'error'
	error: string | null
}

export interface LoginPayload {
	username: string
	password: string
}
