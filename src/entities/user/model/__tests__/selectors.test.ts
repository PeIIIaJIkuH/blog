import { type RootState } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

import { getAuth } from '../selectors'

const state: DeepPartialObject<RootState> = {
	user: {
		auth: {
			id: 'test-id',
			username: 'test-username',
		},
	},
}

describe('entities/user/model/selectors', () => {
	it('should return the auth', () => {
		expect(getAuth(state as RootState)).toEqual({
			id: 'test-id',
			username: 'test-username',
		})
	})
})
