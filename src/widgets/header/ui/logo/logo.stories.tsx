import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Logo } from './logo'

const componentMeta: ComponentMeta<typeof Logo> = {
	title: 'widgets/header/logo',
	component: Logo,
}

export default componentMeta

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})
