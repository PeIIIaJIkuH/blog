import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { withStore } from 'shared/config/storybook'

import { LoginModal } from './login-modal'

const componentMeta: ComponentMeta<typeof LoginModal> = {
	title: 'features/auth-by-username/login-modal',
	component: LoginModal,
}

export default componentMeta

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />

export const Default = Template.bind({})
Default.args = {
	isOpen: true,
}
Default.decorators = [
	withStore({
		login: {
			username: 'username',
			password: 'password',
		},
	}),
]
