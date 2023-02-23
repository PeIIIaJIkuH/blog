import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { userReducer, type UserState } from 'entities/user'

interface RootState {
	user: UserState
}

const rootReducers: ReducersMapObject<RootState> = {
	user: userReducer,
}

export const store = configureStore<RootState>({
	reducer: rootReducers,
	devTools: IS_DEV,
})
