import { type RootState } from 'app/store'

export const getProfileProfile = (state: RootState) => state.profile?.profile ?? null
export const getProfileStatus = (state: RootState) => state.profile?.status ?? 'idle'
export const getProfileError = (state: RootState) => state.profile?.error ?? null
