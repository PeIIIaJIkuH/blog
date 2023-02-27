import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { loginReducer } from 'features/auth-by-username'
import { withStore } from 'shared/config/storybook'
import { type ReducerMap } from 'shared/hooks/use-lazy-module-loading'

import { LoginForm } from './login-form'

const reducerMap: ReducerMap = {
	login: loginReducer,
}

const componentMeta: ComponentMeta<typeof LoginForm> = {
	title: 'features/auth-by-username/login-form',
	component: LoginForm,
	decorators: [
		(Story) => {
			return (
				<div style={{ width: 'fit-content', margin: 'auto' }}>
					<Story />
				</div>
			)
		},
	],
}

export default componentMeta

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Default = Template.bind({})
Default.decorators = [
	withStore(
		{
			login: {
				username: 'username',
				password: 'password',
			},
		},
		reducerMap,
	),
]

export const Loading = Template.bind({})
Loading.decorators = [
	withStore(
		{
			login: {
				status: 'loading',
			},
		},
		reducerMap,
	),
]

export const Error = Template.bind({})
Error.decorators = [
	withStore(
		{
			login: {
				status: 'error',
				error: 'error',
			},
		},
		reducerMap,
	),
]
