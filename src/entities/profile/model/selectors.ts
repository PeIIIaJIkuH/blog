import { type RootState } from 'app/store'

export const getProfile = (state: RootState) => state.profile?.profile ?? null
export const getStatus = (state: RootState) => state.profile?.status ?? 'idle'
export const getError = (state: RootState) => state.profile?.error ?? null
export const getReadOnly = (state: RootState) => state.profile?.readOnly ?? false
