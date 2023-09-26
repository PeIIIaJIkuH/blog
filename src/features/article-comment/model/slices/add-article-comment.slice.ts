import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { addComment } from '../services/add-article-comment.services'
import { type AddArticleCommentState } from '../types/add-article-comment.types'

const initialState: AddArticleCommentState = {
	comment: '',
	status: 'idle',
	error: null,
}

export const addArticleCommentSliceName = 'add-article-comment'

export const addArticleCommentSlice = createSlice({
	name: addArticleCommentSliceName,
	initialState,
	reducers: {
		setComment: (state, action: PayloadAction<string>) => {
			state.comment = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addComment.pending, (state) => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(addComment.fulfilled, (state) => {
			state.status = 'success'
			state.comment = ''
		})
		builder.addCase(addComment.rejected, (state) => {
			state.status = 'error'
			state.error = 'errors.comment_not_added'
		})
	},
})

export const { actions: addArticleCommentActions, reducer: addArticleCommentReducer } = addArticleCommentSlice
