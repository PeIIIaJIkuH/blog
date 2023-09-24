import { type Article } from 'entities/article'

import { articleDetailsSlice, articleDetailsActions, articleDetailsReducer } from '../article-details-slice'
import { fetchArticle } from '../services'
import { type ArticleDetailsState } from '../types'

describe('features/view-article-details/model/article-details-slice', () => {
	it('should return the initial state', () => {
		expect(articleDetailsSlice.reducer(undefined, {} as any)).toEqual({
			article: null,
			status: 'idle',
			error: null,
		})
	})

	it('should handle setArticle', () => {
		const article: Article = {
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
		}
		expect(articleDetailsReducer(undefined, articleDetailsActions.setArticle(article)).article).toEqual(article)
	})

	it('should set status to loading on fetchArticle.pending', () => {
		const state: ArticleDetailsState = {
			article: null,
			status: 'idle',
			error: null,
		}
		expect(articleDetailsReducer(state, fetchArticle.pending).status).toEqual('loading')
	})

	it('should set status to success and set article on fetchArticle.fulfilled', () => {
		const state: ArticleDetailsState = {
			article: null,
			status: 'idle',
			error: null,
		}
		const article: Article = {
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
		}
		expect(articleDetailsReducer(state, fetchArticle.fulfilled(article, '', '')).status).toEqual('success')
		expect(articleDetailsReducer(state, fetchArticle.fulfilled(article, '', '')).article).toEqual(article)
	})
})
