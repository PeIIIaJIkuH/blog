import { type RootState } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

import { getArticleDetailsArticle, getArticleDetailsStatus, getArticleDetailsError } from './article-details.selectors'

const emptyState: DeepPartialObject<RootState> = {}
const state: DeepPartialObject<RootState> = {
	articleDetails: {
		article: {
			id: 'id',
			title: 'title',
			subtitle: 'subtitle',
			createdAt: 'createdAt',
			tags: ['tag1', 'tag2'],
			views: 100,
			imgUrl: 'https://placehold.co/600x400',
			blocks: [
				{
					type: 'text',
					data: {
						title: 'title',
						content: ['paragraph1', 'paragraph2'],
					},
				},
				{
					type: 'image',
					data: {
						url: 'https://placehold.co/600x400',
						caption: 'caption',
					},
				},
				{
					type: 'code',
					data: {
						code: 'line 1',
						language: 'language',
					},
				},
			],
		},
		status: 'success',
		error: null,
	},
}

describe('entities/article/article-details.selectors', () => {
	it('should return the article', () => {
		expect(getArticleDetailsArticle(state as RootState)).toEqual({
			id: 'id',
			title: 'title',
			subtitle: 'subtitle',
			createdAt: 'createdAt',
			tags: ['tag1', 'tag2'],
			views: 100,
			imgUrl: 'https://placehold.co/600x400',
			blocks: [
				{
					type: 'text',
					data: {
						title: 'title',
						content: ['paragraph1', 'paragraph2'],
					},
				},
				{
					type: 'image',
					data: {
						url: 'https://placehold.co/600x400',
						caption: 'caption',
					},
				},
				{
					type: 'code',
					data: {
						code: 'line 1',
						language: 'language',
					},
				},
			],
		})
	})

	it('should return default if article is not set', () => {
		expect(getArticleDetailsArticle(emptyState as RootState)).toEqual(null)
	})

	it('should return the status', () => {
		expect(getArticleDetailsStatus(state as RootState)).toEqual('success')
	})

	it('should return default if status is not set', () => {
		expect(getArticleDetailsStatus(emptyState as RootState)).toEqual('idle')
	})

	it('should return the error', () => {
		expect(getArticleDetailsError(state as RootState)).toEqual(null)
	})

	it('should return default if error is not set', () => {
		expect(getArticleDetailsError(emptyState as RootState)).toEqual(null)
	})
})
