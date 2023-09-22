import { type RootState } from 'app/store'

export const getArticles = (state: RootState) => state.articles?.articles ?? []
export const getStatus = (state: RootState) => state.articles?.status ?? 'idle'
export const getError = (state: RootState) => state.articles?.error ?? null
