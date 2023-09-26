import { type FC, type PropsWithChildren } from 'react'

import { useAppSelector } from 'app/store'
import { getUserUser } from 'entities/user'

import { NotFoundPage } from './not-found'

export const AuthRoute: FC<PropsWithChildren> = ({ children }) => {
	const user = useAppSelector(getUserUser)

	if (!user) {
		return <NotFoundPage />
	}

	return <>{children}</>
}
