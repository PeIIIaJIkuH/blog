import { type RootState } from 'app/store'

export const getArticleCommentsStatus = (state: RootState) => state.articleComments?.status ?? 'idle'
export const getArticleCommentsError = (state: RootState) => state.articleComments?.error ?? null
