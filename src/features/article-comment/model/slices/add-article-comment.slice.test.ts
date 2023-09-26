import { addComment } from '../services/add-article-comment.services'
import { type ArticleComment } from '../types'
import { type AddArticleCommentState } from '../types/add-article-comment.types'

import { addArticleCommentActions, addArticleCommentReducer } from './add-article-comment.slice'

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

describe('features/article-comment/add-article-comment', () => {
	it('should return the initial state', () => {
		expect(addArticleCommentReducer(undefined, {} as any)).toEqual({
			comment: '',
			status: 'idle',
			error: null,
		})
	})

	it('should handle setComment', () => {
		expect(addArticleCommentReducer(undefined, addArticleCommentActions.setComment('comment')).comment).toEqual(
			'comment',
		)
	})

	it('should set status to loading on addComment.pending', () => {
		const state: AddArticleCommentState = {
			comment: '',
			status: 'idle',
			error: null,
		}
		expect(addArticleCommentReducer(state, addComment.pending).status).toEqual('loading')
	})

	it('should set status to success on addComment.fulfilled', () => {
		const state: AddArticleCommentState = {
			comment: '',
			status: 'idle',
			error: null,
		}
		const comment = { ...data }
		expect(addArticleCommentReducer(state, addComment.fulfilled(comment, '')).status).toEqual('success')
	})

	it('should set status to error on addComment.rejected', () => {
		const state: AddArticleCommentState = {
			comment: '',
			status: 'idle',
			error: null,
		}
		expect(addArticleCommentReducer(state, addComment.rejected).status).toEqual('error')
		expect(addArticleCommentReducer(state, addComment.rejected).error).toEqual('errors.comment_not_added')
	})
})
