import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StoreThunkConfig } from 'app/store'
import { getArticleDetailsArticle } from 'entities/article'
import { type Comment } from 'entities/comment'
import { getUser } from 'entities/user'
import { fetchCommentsByArticleId } from 'features/view-article-comments'

import { addArticleCommentSliceName } from './add-article-comment-slice'
import { getComment } from './selectors'

export const addComment = createAsyncThunk<Comment, void, StoreThunkConfig<string>>(
	`${addArticleCommentSliceName}/addComment`,
	async (_, thunkAPI) => {
		try {
			const user = getUser(thunkAPI.getState())
			const comment = getComment(thunkAPI.getState())
			const article = getArticleDetailsArticle(thunkAPI.getState())

			if (!user || !comment || !article) {
				return thunkAPI.rejectWithValue('No data')
			}

			const response = await thunkAPI.extra.api.post<Comment>('/comments', {
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
