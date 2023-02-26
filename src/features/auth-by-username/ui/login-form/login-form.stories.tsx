import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { withStore } from 'shared/config/storybook'

import { LoginForm } from './login-form'

const componentMeta: ComponentMeta<typeof LoginForm> = {
	title: 'features/auth-by-username/login-form',
	component: LoginForm,
	decorators: [
		(Story) => {
			return (
				<div style={{ width: 400, margin: 'auto' }}>
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
	withStore({
		login: {
			username: 'username',
			password: 'password',
		},
	}),
]

export const Loading = Template.bind({})
Loading.decorators = [
	withStore({
		login: {
			status: 'loading',
		},
	}),
]

export const Error = Template.bind({})
Error.decorators = [
	withStore({
		login: {
			status: 'error',
			error: 'error',
		},
	}),
]
