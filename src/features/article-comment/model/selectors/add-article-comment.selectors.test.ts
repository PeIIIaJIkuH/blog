import { type RootState } from 'app/store'
import { type DeepPartialObject } from 'shared/types'

import {
	getAddArticleCommentComment,
	getAddArticleCommentStatus,
	getAddArticleCommentError,
} from './add-article-comment.selectors'

const emptyState: DeepPartialObject<RootState> = {}
const state: DeepPartialObject<RootState> = {
	addArticleComment: {
		comment: 'comment',
		status: 'success',
		error: null,
	},
}

describe('features/article-comment/add-article-comment.selectors', () => {
	it('should return the comment', () => {
		expect(getAddArticleCommentComment(state as RootState)).toEqual('comment')
	})

	it('should return default if comment is not set', () => {
		expect(getAddArticleCommentComment(emptyState as RootState)).toEqual('')
	})

	it('should return the status', () => {
		expect(getAddArticleCommentStatus(state as RootState)).toEqual('success')
	})

	it('should return default if status is not set', () => {
		expect(getAddArticleCommentStatus(emptyState as RootState)).toEqual('idle')
	})

	it('should return the error', () => {
		expect(getAddArticleCommentError(state as RootState)).toEqual(null)
	})

	it('should return default if error is not set', () => {
		expect(getAddArticleCommentError(emptyState as RootState)).toEqual(null)
	})
})
