import { type FC, type PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useAppSelector } from 'app/store'
import { getUser } from 'entities/user'
import { RoutePath } from 'shared/config/routes'

export const AuthRoute: FC<PropsWithChildren> = ({ children }) => {
	const user = useAppSelector(getUser)
	const location = useLocation()

	if (!user) {
		return <Navigate to={RoutePath.home} state={{ from: location }} replace />
	}

	return <>{children}</>
}
