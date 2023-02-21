import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Header } from './header'

const componentMeta: ComponentMeta<typeof Header> = {
	title: 'widgets/header',
	component: Header,
}

export default componentMeta

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
