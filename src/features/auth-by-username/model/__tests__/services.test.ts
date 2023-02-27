import axios from 'axios'

import { userActions } from 'entities/user'
import { AsyncThunkWrapper } from 'shared/helpers/async-thunk-wrapper'

import { loginByUsername } from '../services'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

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

		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userResponse }))
		const thunkWrapper = new AsyncThunkWrapper(loginByUsername)
		const result = await thunkWrapper.callThunk(userRequest)

		expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:8000/login', userRequest)
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

		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 401 }))
		const thunkWrapper = new AsyncThunkWrapper(loginByUsername)
		const result = await thunkWrapper.callThunk(userRequest)

		expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:8000/login', userRequest)
		expect(result.payload).toEqual(userResponse)
		expect(result.meta.requestStatus).toEqual('rejected')
		expect(thunkWrapper.dispatch).toHaveBeenCalledTimes(2)
	})
})
