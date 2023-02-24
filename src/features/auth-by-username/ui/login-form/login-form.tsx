import { type FC, type FormEventHandler, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

import s from './login-form.module.scss'

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const { t } = useTranslation()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
	}

	return (
		<form className={cls(s.loginForm, className)} onSubmit={handleSubmit}>
			<Input autoFocus placeholder='Username' clearable value={username} onChange={setUsername} />
			<Input type='password' placeholder='Password' clearable value={password} onChange={setPassword} />
			<Button radius='small' variant='filled' color='primary' className={s.submitButton}>
				{t('header.login')}
			</Button>
		</form>
	)
}
