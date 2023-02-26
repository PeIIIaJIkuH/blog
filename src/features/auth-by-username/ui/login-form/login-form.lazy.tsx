import { type FC, lazy } from 'react'

import { type LoginFormProps } from './login-form'

export const LoginFormLazy = lazy<FC<LoginFormProps>>(
	async () =>
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(import('./login-form').then(({ LoginForm }) => ({ default: LoginForm })))
			}, 1500)
		}),
)
