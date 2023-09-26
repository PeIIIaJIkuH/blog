import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { type RootState } from 'app/store'

import { fetchCommentsByArticleId } from '../services/article-comments.services'
import { type ArticleComment } from '../types'
import { type ArticleCommentsState } from '../types/article-comments.types'

const articleCommentsAdapter = createEntityAdapter<ArticleComment>({
	selectId: (comment) => comment.id,
})

export const getArticleCommentsSelectors = articleCommentsAdapter.getSelectors<RootState>(
	(state) => state.articleComments ?? articleCommentsAdapter.getInitialState(),
)

export const articleCommentsSliceName = 'articleComments'

const articleCommentsSlice = createSlice({
	name: articleCommentsSliceName,
	initialState: articleCommentsAdapter.getInitialState<ArticleCommentsState>({
		ids: [],
		entities: {},
		status: 'idle',
		error: null,
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCommentsByArticleId.pending, (state) => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<ArticleComment[]>) => {
			state.status = 'success'
			articleCommentsAdapter.setAll(state, action.payload)
		})
		builder.addCase(fetchCommentsByArticleId.rejected, (state) => {
			state.status = 'error'
			state.error = 'errors.no_comments'
		})
	},
})

export const { reducer: articleCommentsReducer } = articleCommentsSlice
