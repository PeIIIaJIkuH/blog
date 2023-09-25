import { type User } from '../types'
import { userSlice, userActions, userReducer } from '../user-slice'

describe('entities/user/model/user-slice', () => {
	it('should return the initial state', () => {
		expect(userSlice.reducer(undefined, {} as any)).toEqual({
			user: null,
		})
	})

	it('should handle setUser', () => {
		const user: User = { id: 'test-id', username: 'test-username', role: 'user', avatarUrl: null }
		expect(userReducer(undefined, userActions.setUser(user)).user).toEqual(user)
	})
})
