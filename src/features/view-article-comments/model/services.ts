import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StoreThunkConfig } from 'app/store'
import { type Comment } from 'entities/comment'

import { articleCommentsSliceName } from './article-comments-slice'

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, StoreThunkConfig<string>>(
	`${articleCommentsSliceName}/fetchCommentsByArticleId`,
	async (articleId, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Comment[]>('/comments', {
				params: {
					articleId,
					_expand: 'user',
				},
			})
			if (!response.data) {
				throw new Error('No data')
			}
			return response.data
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	},
)
