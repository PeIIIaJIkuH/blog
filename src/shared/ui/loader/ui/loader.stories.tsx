import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Loader } from './loader'

const componentMeta: ComponentMeta<typeof Loader> = {
	title: 'shared/loader',
	component: Loader,
}

export default componentMeta

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Xs = Template.bind({})
Xs.args = {
	size: 'xs',
}

export const Sm = Template.bind({})
Sm.args = {
	size: 'sm',
}

export const Md = Template.bind({})
Md.args = {
	size: 'md',
}

export const Lg = Template.bind({})
Lg.args = {
	size: 'lg',
}

export const Xl = Template.bind({})
Xl.args = {
	size: 'xl',
}
