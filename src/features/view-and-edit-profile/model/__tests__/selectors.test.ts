import { type RootState } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

import { getProfile, getStatus, getError } from '../selectors'

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

describe('features/view-and-edit-profile/model/selectors', () => {
	it('should return the profile', () => {
		expect(getProfile(state as RootState)).toEqual({
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

	it('should return default if username is not set', () => {
		expect(getProfile(emptyState as RootState)).toEqual(null)
	})

	it('should return the status', () => {
		expect(getStatus(state as RootState)).toEqual('success')
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
