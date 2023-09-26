import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type Article } from '../types'
import { type ArticlesState } from '../types/articles.types'

const initialState: ArticlesState = {
	articles: [],
	status: 'idle',
	error: null,
}

export const articlesSliceName = 'articles'

export const articlesSlice = createSlice({
	name: articlesSliceName,
	initialState,
	reducers: {
		setArticles: (state, action: PayloadAction<Article[]>) => {
			state.articles = action.payload
		},
	},
})

export const { actions: articlesActions, reducer: articlesReducer } = articlesSlice