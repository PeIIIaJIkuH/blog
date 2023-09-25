import { type RootState } from 'app/store'

export const getStatus = (state: RootState) => state.articleComments?.status ?? 'idle'
export const getError = (state: RootState) => state.articleComments?.error ?? null
