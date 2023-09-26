import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StoreThunkConfig } from 'app/store'

import { articleCommentsSliceName } from '../slices/article-comments.slice'
import { type ArticleComment } from '../types'

export const fetchCommentsByArticleId = createAsyncThunk<ArticleComment[], string, StoreThunkConfig<string>>(
	`${articleCommentsSliceName}/fetchCommentsByArticleId`,
	async (articleId, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<ArticleComment[]>('/comments', {
				params: {
					articleId,
					_expand: 'user',
				},
			})
			if (!response.data) {
				return thunkAPI.rejectWithValue('No data')
			}
			return response.data
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	},
)
