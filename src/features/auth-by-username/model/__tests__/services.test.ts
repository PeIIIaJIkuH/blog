import { type User, userActions } from 'entities/user'
import { AsyncThunkWrapper } from 'shared/helpers/async-thunk-wrapper'

import { loginByUsername } from '../services'

const data = {
	username: 'test-username',
	password: 'test-password',
}

describe('features/auth-by-username/model/services', () => {
	it('should login by username', async () => {
		const userRequest = { ...data }
		const userResponse: User = {
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

		const thunkWrapper = new AsyncThunkWrapper(loginByUsername)
		thunkWrapper.api.post.mockReturnValue(Promise.resolve({ data: userResponse }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.post).toHaveBeenCalledWith('/login', userRequest)
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(userResponse)
		expect(thunkWrapper.dispatch).toHaveBeenCalledWith(userActions.setUser(userResponse))
		expect(thunkWrapper.dispatch).toHaveBeenCalledTimes(3)
	})

	it('should return error if status is not 200 on login by username', async () => {
		const userRequest = { ...data }
		const userResponse = 'error'

		const thunkWrapper = new AsyncThunkWrapper(loginByUsername)
		thunkWrapper.api.post.mockReturnValue(Promise.resolve({ status: 401 }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.post).toHaveBeenCalledWith('/login', userRequest)
		expect(result.payload).toEqual(userResponse)
		expect(result.meta.requestStatus).toEqual('rejected')
		expect(thunkWrapper.dispatch).toHaveBeenCalledTimes(2)
	})
})
