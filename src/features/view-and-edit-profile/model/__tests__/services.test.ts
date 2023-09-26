import { type User } from 'entities/user'
import { AsyncThunkWrapper } from 'shared/helpers/async-thunk-wrapper'

import { fetchProfile, updateProfile, updateProfileImage } from '../services'
import { type ImagePayload } from '../types'

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
	currency: 'test-currency',
	balance: 100,
	backgroundUrl: 'test-backgroundUrl',
	avatarUrl: 'test-avatarUrl',
}

describe('features/view-and-edit-profile/model/services', () => {
	it('should fetch profile', async () => {
		const userRequest = 'test-userId'
		const userResponse = { ...user }

		const thunkWrapper = new AsyncThunkWrapper(fetchProfile)
		thunkWrapper.api.get.mockReturnValue(Promise.resolve({ data: userResponse }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.get).toHaveBeenCalledWith(`/users/${userRequest}`)
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(userResponse)
	})

	it('should return error if status is not 200 on fetch profile', async () => {
		const userRequest = 'test-userId'
		const userResponse = 'No data'

		const thunkWrapper = new AsyncThunkWrapper(fetchProfile)
		thunkWrapper.api.get.mockReturnValue(Promise.resolve({ status: 401 }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.get).toHaveBeenCalledWith(`/users/${userRequest}`)
		expect(result.payload).toEqual(userResponse)
		expect(result.meta.requestStatus).toEqual('rejected')
	})

	it('should update profile', async () => {
		const userRequest = { ...user }
		const userResponse = { ...userRequest }

		const thunkWrapper = new AsyncThunkWrapper(updateProfile)
		thunkWrapper.api.patch.mockReturnValue(Promise.resolve({ data: userResponse }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.patch).toHaveBeenCalledWith(`/users/${user.id}`, userRequest)
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(userResponse)
	})

	it('should return error if status is not 200 on update profile', async () => {
		const userRequest = { ...user }
		const userResponse = 'No data'

		const thunkWrapper = new AsyncThunkWrapper(updateProfile)
		thunkWrapper.api.patch.mockReturnValue(Promise.resolve({ status: 401 }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.patch).toHaveBeenCalledWith(`/users/${user.id}`, userRequest)
		expect(result.payload).toEqual(userResponse)
		expect(result.meta.requestStatus).toEqual('rejected')
	})

	it('should update profile image', async () => {
		const userRequest: ImagePayload & { userId: string } = {
			userId: 'test-userId',
			image: new File([], 'test-image'),
			type: 'avatar',
		}
		const userResponse = { ...user }

		const thunkWrapper = new AsyncThunkWrapper(updateProfileImage)
		thunkWrapper.api.patch.mockReturnValue(Promise.resolve({ data: userResponse }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.patch).toHaveBeenCalledWith('/users/image', expect.any(FormData))
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(userResponse)
	})

	it('should return error if status is not 200 on update profile image', async () => {
		const userRequest: ImagePayload & { userId: string } = {
			userId: 'test-userId',
			image: new File([], 'test-image'),
			type: 'avatar',
		}
		const userResponse = 'No data'

		const thunkWrapper = new AsyncThunkWrapper(updateProfileImage)
		thunkWrapper.api.patch.mockReturnValue(Promise.resolve({ status: 401 }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.patch).toHaveBeenCalledWith('/users/image', expect.any(FormData))
		expect(result.payload).toEqual(userResponse)
		expect(result.meta.requestStatus).toEqual('rejected')
	})
})
