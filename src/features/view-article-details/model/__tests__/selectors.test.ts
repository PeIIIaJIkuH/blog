import { type RootState } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

import { getArticle, getStatus, getError } from '../selectors'

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

describe('features/view-article-details/model/selectors', () => {
	it('should return the article', () => {
		expect(getArticle(state as RootState)).toEqual({
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
		expect(getArticle(emptyState as RootState)).toEqual(null)
	})

	it('should return the status', () => {
		expect(getStatus(state as RootState)).toEqual('success')
	})

	it('should return default if status is not set', () => {
		expect(getStatus(emptyState as RootState)).toEqual('idle')
	})

	it('should return the error', () => {
		expect(getError(state as RootState)).toEqual(null)
	})

	it('should return default if error is not set', () => {
		expect(getError(emptyState as RootState)).toEqual(null)
	})
})
