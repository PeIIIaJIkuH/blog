import { type RootState } from 'app/store'
import { AsyncThunkWrapper } from 'shared/helpers/async-thunk-wrapper'
import { type DeepPartialObject } from 'shared/types'

import { type ArticleComment } from '../types'

import { addComment } from './add-article-comment.services'

const data: ArticleComment = {
	id: 'id',
	content: 'content',
	articleId: 'articleId',
	user: {
		id: 'test-id',
		firstName: 'test-first-name',
		lastName: 'test-last-name',
		role: 'user',
		birthDate: 'test-birth-date',
		email: 'test-email',
		username: 'test-username',
		country: 'test-country',
		city: 'test-city',
		currency: 'test-currency',
		balance: 100,
		backgroundUrl: 'test-background-url',
		avatarUrl: null,
	},
}

const state: DeepPartialObject<RootState> = {
	addArticleComment: {
		comment: 'comment',
		status: 'success',
		error: null,
	},
}

describe('features/article-comment/add-article-comment.service', () => {
	it('should fetch add comment', async () => {
		const userResponse = { ...data }

		const thunkWrapper = new AsyncThunkWrapper(addComment, state as RootState)
		thunkWrapper.api.post.mockReturnValue(Promise.resolve({ data: userResponse }))
		const result = await thunkWrapper.callThunk()

		expect(thunkWrapper.api.post).toHaveBeenCalledWith('/comments')
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(userResponse)
	})

	it('should return error if status is not 200 on fetch add comment', async () => {
		const userResponse = 'No data'

		const thunkWrapper = new AsyncThunkWrapper(addComment, state as RootState)
		thunkWrapper.api.post.mockReturnValue(Promise.resolve({ status: 401 }))
		const result = await thunkWrapper.callThunk()

		expect(thunkWrapper.api.post).toHaveBeenCalledWith('/comments')
		expect(result.payload).toEqual(userResponse)
		expect(result.meta.requestStatus).toEqual('rejected')
	})
})
