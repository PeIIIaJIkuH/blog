import { type RootState } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

import { getUserRehydrated, getUserUser } from './user.selectors'

const state: DeepPartialObject<RootState> = {
	user: {
		user: {
			id: 'test-id',
			username: 'test-username',
		},
		rehydrated: true,
	},
}
const emptyState: DeepPartialObject<RootState> = {
	user: {
		user: null,
		rehydrated: false,
	},
}

describe('entities/user/user.selectors', () => {
	it('should return user', () => {
		expect(getUserUser(state as RootState)).toEqual({
			id: 'test-id',
			username: 'test-username',
		})
	})

	it('should return null if user is not set', () => {
		expect(getUserUser(emptyState as RootState)).toBeNull()
	})

	it('should return rehydrated', () => {
		expect(getUserRehydrated(state as RootState)).toEqual(true)
	})

	it('should return false if rehydrated is not set', () => {
		expect(getUserRehydrated(emptyState as RootState)).toEqual(false)
	})
})
