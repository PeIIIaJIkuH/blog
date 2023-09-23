import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Loader } from './loader'

const componentMeta: ComponentMeta<typeof Loader> = {
	title: 'shared/loader',
	component: Loader,
}

export default componentMeta

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {}

export const SizeXs = Template.bind({})
SizeXs.args = {
	size: 'xs',
}

export const SizeSm = Template.bind({})
SizeSm.args = {
	size: 'sm',
}

export const SizeMd = Template.bind({})
SizeMd.args = {
	size: 'md',
}

export const SizeLg = Template.bind({})
SizeLg.args = {
	size: 'lg',
}

export const SizeXl = Template.bind({})
SizeXl.args = {
	size: 'xl',
}
