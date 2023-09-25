import { type RootState } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

import { getUser, getRehydrated } from '../selectors'

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

describe('entities/user/model/selectors', () => {
	it('should return user', () => {
		expect(getUser(state as RootState)).toEqual({
			id: 'test-id',
			username: 'test-username',
		})
	})

	it('should return null if user is not set', () => {
		expect(getUser(emptyState as RootState)).toBeNull()
	})

	it('should return rehydrated', () => {
		expect(getRehydrated(state as RootState)).toEqual(true)
	})

	it('should return false if rehydrated is not set', () => {
		expect(getRehydrated(emptyState as RootState)).toEqual(false)
	})
})
