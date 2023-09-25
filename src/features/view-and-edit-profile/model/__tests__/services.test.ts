import { type ImagePayload } from 'entities/profile'
import { AsyncThunkWrapper } from 'shared/helpers/async-thunk-wrapper'

import { fetchProfile, updateProfile, updateProfileImage } from '../services'

const data = {
	firstName: 'test-firstName',
	lastName: 'test-lastName',
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
		const userResponse = { ...data }

		const thunkWrapper = new AsyncThunkWrapper(fetchProfile)
		thunkWrapper.api.get.mockReturnValue(Promise.resolve({ data: userResponse }))
		const result = await thunkWrapper.callThunk()

		expect(thunkWrapper.api.get).toHaveBeenCalledWith('/profile')
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(userResponse)
	})

	it('should return error if status is not 200 on fetch profile', async () => {
		const userResponse = 'error'

		const thunkWrapper = new AsyncThunkWrapper(fetchProfile)
		thunkWrapper.api.get.mockReturnValue(Promise.resolve({ status: 401 }))
		const result = await thunkWrapper.callThunk()

		expect(thunkWrapper.api.get).toHaveBeenCalledWith('/profile')
		expect(result.payload).toEqual(userResponse)
		expect(result.meta.requestStatus).toEqual('rejected')
	})

	it('should update profile', async () => {
		const userRequest = { ...data }
		const userResponse = { ...userRequest }

		const thunkWrapper = new AsyncThunkWrapper(updateProfile)
		thunkWrapper.api.patch.mockReturnValue(Promise.resolve({ data: userResponse }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.patch).toHaveBeenCalledWith('/profile', userRequest)
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(userResponse)
	})

	it('should return error if status is not 200 on update profile', async () => {
		const userRequest = { ...data }
		const userResponse = 'error'

		const thunkWrapper = new AsyncThunkWrapper(updateProfile)
		thunkWrapper.api.patch.mockReturnValue(Promise.resolve({ status: 401 }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.patch).toHaveBeenCalledWith('/profile', userRequest)
		expect(result.payload).toEqual(userResponse)
		expect(result.meta.requestStatus).toEqual('rejected')
	})

	it('should update profile image', async () => {
		const userRequest: ImagePayload = {
			image: new File([], 'test-image'),
			type: 'avatar',
		}
		const userResponse = { ...data }

		const thunkWrapper = new AsyncThunkWrapper(updateProfileImage)
		thunkWrapper.api.patch.mockReturnValue(Promise.resolve({ data: userResponse }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.patch).toHaveBeenCalledWith('/profile/image', expect.any(FormData))
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(userResponse)
	})

	it('should return error if status is not 200 on update profile image', async () => {
		const userRequest: ImagePayload = {
			image: new File([], 'test-image'),
			type: 'avatar',
		}
		const userResponse = 'error'

		const thunkWrapper = new AsyncThunkWrapper(updateProfileImage)
		thunkWrapper.api.patch.mockReturnValue(Promise.resolve({ status: 401 }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.patch).toHaveBeenCalledWith('/profile/image', expect.any(FormData))
		expect(result.payload).toEqual(userResponse)
		expect(result.meta.requestStatus).toEqual('rejected')
	})
})
