import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Loader } from './loader'

const componentMeta: ComponentMeta<typeof Loader> = {
	title: 'shared/loader',
	component: Loader,
}

export default componentMeta

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Small = Template.bind({})
Small.args = {
	size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
	size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
	size: 'large',
}
