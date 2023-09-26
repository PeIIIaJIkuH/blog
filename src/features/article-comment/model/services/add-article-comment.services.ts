import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StoreThunkConfig } from 'app/store'
import { getArticleDetailsArticle } from 'entities/article'
import { getUserUser } from 'entities/user'

import { getAddArticleCommentComment } from '../selectors/add-article-comment.selectors'
import { addArticleCommentSliceName } from '../slices/add-article-comment.slice'
import { type ArticleComment } from '../types'

import { fetchCommentsByArticleId } from './article-comments.services'

export const addComment = createAsyncThunk<ArticleComment, void, StoreThunkConfig<string>>(
	`${addArticleCommentSliceName}/addComment`,
	async (_, thunkAPI) => {
		try {
			const user = getUserUser(thunkAPI.getState())
			const comment = getAddArticleCommentComment(thunkAPI.getState())
			const article = getArticleDetailsArticle(thunkAPI.getState())

			if (!user || !comment || !article) {
				return thunkAPI.rejectWithValue('No data')
			}

			const response = await thunkAPI.extra.api.post<ArticleComment>('/comments', {
				articleId: article.id,
				userId: user.id,
				content: comment,
			})
			if (!response.data) {
				return thunkAPI.rejectWithValue('No data')
			}
			await thunkAPI.dispatch(fetchCommentsByArticleId(article.id))
			return response.data
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	},
)
