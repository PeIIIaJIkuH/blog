import { type RootState } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

import { getUsername, getPassword, getStatus, getError } from '../selectors'

const emptyState: DeepPartialObject<RootState> = {}
const state: DeepPartialObject<RootState> = {
	login: {
		username: 'test-username',
		password: 'test-password',
		status: 'idle',
		error: null,
	},
}

describe('features/auth-by-username/model/selectors', () => {
	it('should return the username', () => {
		expect(getUsername(state as RootState)).toEqual('test-username')
	})

	it('should return default if username is not set', () => {
		expect(getUsername(emptyState as RootState)).toEqual('')
	})

	it('should return the password', () => {
		expect(getPassword(state as RootState)).toEqual('test-password')
	})

	it('should return default if password is not set', () => {
		expect(getPassword(emptyState as RootState)).toEqual('')
	})

	it('should return the status', () => {
		expect(getStatus(state as RootState)).toEqual('idle')
	})

	it('should return default if status is not set', () => {
		expect(getStatus(emptyState as RootState)).toEqual('idle')
	})

	it('should return the error', () => {
		expect(getError(state as RootState)).toEqual(null)
	})

	it('should return default if error is not set', () => {
		expect(getError(emptyState as RootState)).toEqual(null)
	})
})
