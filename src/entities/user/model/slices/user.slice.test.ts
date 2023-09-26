import { type User } from '../types'

import { userActions, userReducer, userSlice } from './user.slice'

describe('entities/user/user.slice', () => {
	it('should return the initial state', () => {
		expect(userSlice.reducer(undefined, {} as any)).toEqual({
			user: null,
			rehydrated: false,
		})
	})

	it('should handle setUser', () => {
		const user: User = {
			id: 'test-id',
			firstName: 'test-firstName',
			lastName: 'test-lastName',
			role: 'user',
			birthDate: 'test-birthDate',
			email: 'test-email',
			username: 'test-username',
			country: 'test-country',
			city: 'test-city',
			avatarUrl: 'test-avatarUrl',
			backgroundUrl: 'test-backgroundUrl',
			currency: 'test-currency',
			balance: 100,
		}
		expect(userReducer(undefined, userActions.setUser(user)).user).toEqual(user)
	})
})
