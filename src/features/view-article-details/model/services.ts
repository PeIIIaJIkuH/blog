import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StoreThunkConfig } from 'app/store'
import { type Article } from 'entities/article'

import { articleDetailsActions, articleDetailsSliceName } from './article-details-slice'

export const fetchArticle = createAsyncThunk<Article | null, string, StoreThunkConfig<string>>(
	`${articleDetailsSliceName}/fetchArticle`,
	async (payload, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Article | null>(`/articles/${payload}`)
			if (!response.data) {
				throw new Error('No data')
			}
			thunkAPI.dispatch(articleDetailsActions.setArticle(response.data))
			return response.data
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	},
)
