import { type RootState } from 'app/store'

export const getComment = (state: RootState) => state.addArticleComment?.comment ?? ''
export const getStatus = (state: RootState) => state.addArticleComment?.status ?? 'idle'
export const getError = (state: RootState) => state.addArticleComment?.error ?? null
