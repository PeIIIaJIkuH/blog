import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StoreThunkConfig } from 'app/store'
import { type Article } from 'entities/article'

import { articleDetailsSliceName } from './article-details-slice'

export const fetchArticle = createAsyncThunk<Article | null, string, StoreThunkConfig<string>>(
	`${articleDetailsSliceName}/fetchArticle`,
	async (articleId, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Article | null>(`/articles/${articleId}`)
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
