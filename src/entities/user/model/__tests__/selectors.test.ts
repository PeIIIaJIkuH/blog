import { type RootState } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

import { getUser } from '../selectors'

const state: DeepPartialObject<RootState> = {
	user: {
		user: {
			id: 'test-id',
			username: 'test-username',
		},
	},
}

describe('entities/user/model/selectors', () => {
	it('should return the auth', () => {
		expect(getUser(state as RootState)).toEqual({
			id: 'test-id',
			username: 'test-username',
		})
	})
})
