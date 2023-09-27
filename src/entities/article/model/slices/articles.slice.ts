import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type Article } from '../types'
import { type ArticlesState } from '../types/articles.types'

const initialState: ArticlesState = {
	articles: [
		{
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
	],
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
