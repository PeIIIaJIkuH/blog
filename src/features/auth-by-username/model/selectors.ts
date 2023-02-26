import { type RootState } from 'app/store'

export const getUsername = (state: RootState) => state.login.username
export const getPassword = (state: RootState) => state.login.password
export const getStatus = (state: RootState) => state.login.status
export const getError = (state: RootState) => state.login.error
