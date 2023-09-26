import { type Article } from 'entities/article'
import { AsyncThunkWrapper } from 'shared/helpers/async-thunk-wrapper'

import { fetchArticle } from './article-details.services'

const data: Article = {
	id: 'id',
	title: 'title',
	subtitle: 'subtitle',
	createdAt: 'createdAt',
	tags: ['tag1', 'tag2'],
	views: 100,
	imgUrl: 'https://placehold.co/600x400',
	blocks: [
		{
			type: 'text' as const,
			data: {
				title: 'title',
				content: ['paragraph1', 'paragraph2'],
			},
		},
		{
			type: 'image' as const,
			data: {
				url: 'https://placehold.co/600x400',
				caption: 'caption',
			},
		},
		{
			type: 'code' as const,
			data: {
				code: 'line 1',
				language: 'language',
			},
		},
	],
}

describe('entities/article/article-details.services', () => {
	it('should fetch article', async () => {
		const userResponse = { ...data }

		const thunkWrapper = new AsyncThunkWrapper(fetchArticle)
		thunkWrapper.api.get.mockReturnValue(Promise.resolve({ data: userResponse }))
		const result = await thunkWrapper.callThunk('id')

		expect(thunkWrapper.api.get).toHaveBeenCalledWith('/articles/id')
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(userResponse)
	})

	it('should return error if status is not 200 on fetch profile', async () => {
		const userResponse = 'No data'

		const thunkWrapper = new AsyncThunkWrapper(fetchArticle)
		thunkWrapper.api.get.mockReturnValue(Promise.resolve({ status: 401 }))
		const result = await thunkWrapper.callThunk('id')

		expect(thunkWrapper.api.get).toHaveBeenCalledWith('/articles/id')
		expect(result.payload).toEqual(userResponse)
		expect(result.meta.requestStatus).toEqual('rejected')
	})
})
