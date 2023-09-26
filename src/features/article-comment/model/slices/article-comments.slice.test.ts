import { fetchCommentsByArticleId } from '../services/article-comments.services'
import { type ArticleComment } from '../types'
import { type ArticleCommentsState } from '../types/article-comments.types'

import { articleCommentsReducer } from './article-comments.slice'

describe('features/article-comment/article-comments.slice', () => {
	it('should return the initial state', () => {
		expect(articleCommentsReducer(undefined, {} as any)).toEqual({
			ids: [],
			entities: {},
			status: 'idle',
			error: null,
		})
	})

	it('should set status to loading on fetchCommentsByArticleId.pending', () => {
		const state: ArticleCommentsState = {
			ids: [],
			entities: {},
			status: 'idle',
			error: null,
		}
		expect(articleCommentsReducer(state, fetchCommentsByArticleId.pending).status).toEqual('loading')
	})

	it('should set status to success on fetchCommentsByArticleId.fulfilled', () => {
		const state: ArticleCommentsState = {
			ids: [],
			entities: {},
			status: 'idle',
			error: null,
		}
		const comments: ArticleComment[] = []
		expect(articleCommentsReducer(state, fetchCommentsByArticleId.fulfilled(comments, '', '')).status).toEqual(
			'success',
		)
	})

	it('should set status to error on fetchArticle.rejected', () => {
		const state: ArticleCommentsState = {
			ids: [],
			entities: {},
			status: 'idle',
			error: null,
		}
		expect(articleCommentsReducer(state, fetchCommentsByArticleId.rejected).status).toEqual('error')
		expect(articleCommentsReducer(state, fetchCommentsByArticleId.rejected).error).toEqual('errors.no_comments')
	})
})
