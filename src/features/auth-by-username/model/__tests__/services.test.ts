import { userActions } from 'entities/user'
import { AsyncThunkWrapper } from 'shared/helpers/async-thunk-wrapper'

import { loginByUsername } from '../services'

describe('features/auth-by-username/model/services', () => {
	it('', async () => {
		const userRequest = {
			username: 'test-username',
			password: 'test-password',
		}
		const userResponse = {
			id: 'test-id',
			username: 'test-username',
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

	it('', async () => {
		const userRequest = {
			username: 'test-username',
			password: 'test-password',
		}
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
