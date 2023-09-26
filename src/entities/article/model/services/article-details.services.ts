import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StoreThunkConfig } from 'app/store'

import { articleDetailsSliceName } from '../slices/article-details.slice'
import { type Article } from '../types'

export const fetchArticle = createAsyncThunk<Article | null, string, StoreThunkConfig<string>>(
	`${articleDetailsSliceName}/fetchArticle`,
	async (articleId, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Article | null>(`/articles/${articleId}`)
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
