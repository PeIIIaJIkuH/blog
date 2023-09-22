import { type Profile } from 'entities/profile'

import { profileSlice, profileActions, profileReducer } from '../profile-slice'
import { fetchProfile } from '../services'
import { type ProfileState } from '../types'

describe('features/view-and-edit-profile/model/login-slice', () => {
	it('should return the initial state', () => {
		expect(profileSlice.reducer(undefined, {} as any)).toEqual({
			profile: null,
			status: 'idle',
			error: null,
		})
	})

	it('should handle setProfile', () => {
		const profile: Profile = {
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
		}
		expect(profileReducer(undefined, profileActions.setProfile(profile)).profile).toEqual(profile)
	})

	it('should set status to loading on fetchProfile.pending', () => {
		const state: ProfileState = {
			profile: null,
			status: 'idle',
			error: null,
		}
		expect(profileReducer(state, fetchProfile.pending).status).toEqual('loading')
	})

	it('should set status to success and set profile on fetchProfile.fulfilled', () => {
		const state: ProfileState = {
			profile: null,
			status: 'idle',
			error: null,
		}
		const profile: Profile = {
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
		}
		expect(profileReducer(state, fetchProfile.fulfilled(profile, '')).status).toEqual('success')
		expect(profileReducer(state, fetchProfile.fulfilled(profile, '')).profile).toEqual(profile)
	})
})