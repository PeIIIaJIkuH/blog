import { loginSlice, loginActions, loginReducer } from '../login-slice'

describe('features/auth-by-username/model/login-slice', () => {
	it('should return the initial state', () => {
		expect(loginSlice.reducer(undefined, {} as any)).toEqual({
			username: '',
			password: '',
			status: 'idle',
			error: null,
		})
	})

	it('should handle setUsername', () => {
		const username = 'test-username'
		expect(loginReducer(undefined, loginActions.setUsername(username)).username).toEqual(username)
	})

	it('should handle setPassword', () => {
		const password = 'test-password'
		expect(loginReducer(undefined, loginActions.setPassword(password)).password).toEqual(password)
	})

	it('should handle reset', () => {
		expect(loginReducer(undefined, loginActions.reset())).toEqual({
			username: '',
			password: '',
			status: 'idle',
			error: null,
		})
	})
})
