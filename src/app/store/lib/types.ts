import {
	type AnyAction,
	type CombinedState,
	type EnhancedStore,
	type Reducer,
	type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'

import { type ArticleDetailsState, type ArticlesState } from 'entities/article'
import { type ProfileState, type UserState } from 'entities/user'
import { type AddArticleCommentState, type ArticleCommentsState } from 'features/article-comment'
import { type LoginState } from 'features/auth-by-username'

import { type store } from './store'

export interface RootState {
	user: UserState
	login?: LoginState
	profile?: ProfileState
	articles?: ArticlesState
	articleDetails?: ArticleDetailsState
	articleComments?: ArticleCommentsState
	addArticleComment?: AddArticleCommentState
}

export type RootStateKeys = keyof RootState

export type AppDispatch = typeof store.dispatch

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<RootState>
	reduce: (state: RootState, action: AnyAction) => CombinedState<RootState>
	add: (key: RootStateKeys, reducer: Reducer) => void
	remove: (key: RootStateKeys) => void
}

export interface StoreWithReducerManager extends EnhancedStore<RootState> {
	reducerManager: ReducerManager
}

export interface StoreThunkExtra {
	api: AxiosInstance
}

export interface StoreThunkConfig<T> {
	rejectValue: T
	extra: StoreThunkExtra
	state: RootState
}
