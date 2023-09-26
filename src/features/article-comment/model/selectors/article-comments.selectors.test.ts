import { type RootState } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

import { getArticleCommentsStatus, getArticleCommentsError } from './article-comments.selectors'

const emptyState: DeepPartialObject<RootState> = {}
const state: DeepPartialObject<RootState> = {
	articleComments: {
		ids: [],
		entities: {},
		status: 'success',
		error: null,
	},
}

describe('features/article-comment/article-comments.selectors', () => {
	it('should return the status', () => {
		expect(getArticleCommentsStatus(state as RootState)).toEqual('success')
	})

	it('should return default if status is not set', () => {
		expect(getArticleCommentsStatus(emptyState as RootState)).toEqual('idle')
	})

	it('should return the error', () => {
		expect(getArticleCommentsError(state as RootState)).toEqual(null)
	})

	it('should return default if error is not set', () => {
		expect(getArticleCommentsError(emptyState as RootState)).toEqual(null)
	})
})
