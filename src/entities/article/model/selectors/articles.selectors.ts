import { type RootState } from 'app/store'

export const getArticlesArticles = (state: RootState) => state.articles?.articles ?? []
export const getArticlesStatus = (state: RootState) => state.articles?.status ?? 'idle'
export const getArticlesError = (state: RootState) => state.articles?.error ?? null
