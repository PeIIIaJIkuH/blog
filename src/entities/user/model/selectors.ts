import { type RootState } from 'app/store'

export const getUser = (state: RootState) => state.user.user
export const getRehydrated = (state: RootState) => state.user.rehydrated
