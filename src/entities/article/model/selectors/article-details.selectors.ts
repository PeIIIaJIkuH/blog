import { type RootState } from 'app/store'

export const getArticleDetailsArticle = (state: RootState) => state.articleDetails?.article ?? null
export const getArticleDetailsStatus = (state: RootState) => state.articleDetails?.status ?? 'idle'
export const getArticleDetailsError = (state: RootState) => state.articleDetails?.error ?? null
