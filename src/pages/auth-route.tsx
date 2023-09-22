import { type FC, type PropsWithChildren } from 'react'

import { useAppSelector } from 'app/store'
import { getUser } from 'entities/user'

import { NotFound } from './not-found'

export const AuthRoute: FC<PropsWithChildren> = ({ children }) => {
	const user = useAppSelector(getUser)

	if (!user) {
		return <NotFound />
	}

	return <>{children}</>
}
