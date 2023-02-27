import { type FC, type FormEventHandler, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { cls } from 'shared/helpers/cls'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

import { loginActions, loginReducer } from '../../model/login-slice'
import { getError, getPassword, getStatus, getUsername } from '../../model/selectors'
import { loginByUsername } from '../../model/services'

import s from './login-form.module.scss'

const reducerMap: ReducerMap = {
	login: loginReducer,
}

export interface LoginFormProps {
	className?: string
	onSuccess?: () => void
}

export const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }) => {
	const { t } = useTranslation()
	const username = useAppSelector(getUsername)
	const password = useAppSelector(getPassword)
	const status = useAppSelector(getStatus)
	const error = useAppSelector(getError)
	const dispatch = useAppDispatch()

	useLazyModuleLoading(reducerMap)

	const handleUsernameChange = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value))
		},
		[dispatch],
	)

	const handlePasswordChange = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value))
		},
		[dispatch],
	)

	const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
		async (e) => {
			e.preventDefault()
			const { payload } = await dispatch(loginByUsername({ username, password }))
			if (payload !== 'error') {
				onSuccess?.()
			}
		},
		[dispatch, onSuccess, password, username],
	)

	return (
		<form className={cls(s.loginForm, className)} onSubmit={handleSubmit}>
			<Input
				autoFocus
				placeholder={t('login_form.username') ?? 'Username'}
				clearable
				value={username}
				onChange={handleUsernameChange}
			/>
			<Input
				type='password'
				placeholder={t('login_form.password') ?? 'Password'}
				clearable
				value={password}
				onChange={handlePasswordChange}
			/>
			{error && <p className={s.error}>{error}</p>}
			<Button
				radius='small'
				variant='filled'
				color='primary'
				type='submit'
				className={s.submitButton}
				disabled={status === 'loading'}
				loading={status === 'loading'}
				text={t('header.login')}
			/>
		</form>
	)
})
