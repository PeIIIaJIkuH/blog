import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type Article } from 'entities/article'
import i18n from 'shared/config/i18n'

import { fetchArticle } from './services'
import { type ArticleDetailsState } from './types'

const initialState: ArticleDetailsState = {
	article: null,
	status: 'idle',
	error: null,
}

export const articleDetailsSliceName = 'article-details'

export const articleDetailsSlice = createSlice({
	name: articleDetailsSliceName,
	initialState,
	reducers: {
		setArticle: (state, action: PayloadAction<Article | null>) => {
			state.article = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchArticle.pending, (state) => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(fetchArticle.fulfilled, (state, action: PayloadAction<Article | null>) => {
			state.status = 'success'
			state.article = action.payload
		})
		builder.addCase(fetchArticle.rejected, (state) => {
			state.status = 'error'
			state.error = i18n.t('error', { ns: 'article-details' }) ?? 'error'
		})
	},
})

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice
