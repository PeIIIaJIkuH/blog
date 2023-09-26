import { type RootState } from 'app/store'

export const getUserUser = (state: RootState) => state.user.user
export const getUserRehydrated = (state: RootState) => state.user.rehydrated
