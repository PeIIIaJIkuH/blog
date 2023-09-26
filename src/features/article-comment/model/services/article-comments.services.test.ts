import { AsyncThunkWrapper } from 'shared/helpers/async-thunk-wrapper'

import { type ArticleComment } from '../types'

import { fetchCommentsByArticleId } from './article-comments.services'

const data: ArticleComment[] = [
	{
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
	},
]

describe('features/article-comment/article-comments.service', () => {
	it('should fetch comments by article id', async () => {
		const userRequest = 'articleId'
		const userResponse = { ...data }

		const thunkWrapper = new AsyncThunkWrapper(fetchCommentsByArticleId)
		thunkWrapper.api.get.mockReturnValue(Promise.resolve({ data: userResponse }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.get).toHaveBeenCalledWith('/comments', {
			params: { _expand: 'user', articleId: userRequest },
		})
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(userResponse)
	})

	it('should return error if status is not 200 on fetch comments by article id', async () => {
		const userRequest = 'articleId'
		const userResponse = 'No data'

		const thunkWrapper = new AsyncThunkWrapper(fetchCommentsByArticleId)
		thunkWrapper.api.get.mockReturnValue(Promise.resolve({ status: 401 }))
		const result = await thunkWrapper.callThunk(userRequest)

		expect(thunkWrapper.api.get).toHaveBeenCalledWith('/comments', {
			params: { _expand: 'user', articleId: userRequest },
		})
		expect(result.payload).toEqual(userResponse)
		expect(result.meta.requestStatus).toEqual('rejected')
	})
})
