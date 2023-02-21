import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppLink } from './app-link'

const componentMeta: ComponentMeta<typeof AppLink> = {
	title: 'shared/app-link',
	component: AppLink,
}

export default componentMeta

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'AppLink',
}
