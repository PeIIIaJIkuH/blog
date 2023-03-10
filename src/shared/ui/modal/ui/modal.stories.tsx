import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Modal } from './modal'

const componentMeta: ComponentMeta<typeof Modal> = {
	title: 'shared/modal',
	component: Modal,
}

export default componentMeta

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
	isOpen: true,
	children: 'Modal',
}
