import { type RootState } from 'app/store'

export const getAddArticleCommentComment = (state: RootState) => state.addArticleComment?.comment ?? ''
export const getAddArticleCommentStatus = (state: RootState) => state.addArticleComment?.status ?? 'idle'
export const getAddArticleCommentError = (state: RootState) => state.addArticleComment?.error ?? null
