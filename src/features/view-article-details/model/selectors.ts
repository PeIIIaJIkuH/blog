import { type RootState } from 'app/store'

export const getArticle = (state: RootState) => state.articleDetails?.article ?? null
export const getStatus = (state: RootState) => state.articleDetails?.status ?? 'idle'
export const getError = (state: RootState) => state.articleDetails?.error ?? null
