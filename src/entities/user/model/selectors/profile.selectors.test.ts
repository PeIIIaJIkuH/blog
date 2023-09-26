import { type RootState } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

import { getProfileProfile, getProfileStatus, getProfileError } from './profile.selectors'

const emptyState: DeepPartialObject<RootState> = {}
const state: DeepPartialObject<RootState> = {
	profile: {
		profile: {
			firstName: 'test-firstName',
			lastName: 'test-lastName',
			birthDate: 'test-birthDate',
			email: 'test-email',
			username: 'test-username',
			country: 'test-country',
			city: 'test-city',
			avatarUrl: 'test-avatarUrl',
			backgroundUrl: 'test-backgroundUrl',
			currency: 'test-currency',
			balance: 100,
		},
		status: 'success',
		error: null,
	},
}

describe('entities/user/profile.selectors', () => {
	it('should return the profile', () => {
		expect(getProfileProfile(state as RootState)).toEqual({
			firstName: 'test-firstName',
			lastName: 'test-lastName',
			birthDate: 'test-birthDate',
			email: 'test-email',
			username: 'test-username',
			country: 'test-country',
			city: 'test-city',
			avatarUrl: 'test-avatarUrl',
			backgroundUrl: 'test-backgroundUrl',
			currency: 'test-currency',
			balance: 100,
		})
	})

	it('should return default if profile is not set', () => {
		expect(getProfileProfile(emptyState as RootState)).toEqual(null)
	})

	it('should return the status', () => {
		expect(getProfileStatus(state as RootState)).toEqual('success')
	})

	it('should return default if status is not set', () => {
		expect(getProfileStatus(emptyState as RootState)).toEqual('idle')
	})

	it('should return the error', () => {
		expect(getProfileError(state as RootState)).toEqual(null)
	})

	it('should return default if error is not set', () => {
		expect(getProfileError(emptyState as RootState)).toEqual(null)
	})
})
