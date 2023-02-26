import { type RootState } from 'app/store'

export const getAuth = (state: RootState) => state.user.auth
