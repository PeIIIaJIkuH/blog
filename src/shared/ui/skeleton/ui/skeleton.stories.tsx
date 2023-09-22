import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Skeleton } from './skeleton'

const componentMeta: ComponentMeta<typeof Skeleton> = {
	title: 'shared/skeleton',
	component: Skeleton,
}

export default componentMeta

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Default = Template.bind({})

export const Circle = Template.bind({})
Circle.args = {
	height: 5,
	circle: true,
}

export const WithoutAnimation = Template.bind({})
WithoutAnimation.args = {
	animate: false,
}

export const CustomWidth = Template.bind({})
CustomWidth.args = {
	width: 20,
}

export const CustomHeight = Template.bind({})
CustomHeight.args = {
	height: 5,
}

export const RadiusXs = Template.bind({})
RadiusXs.args = {
	radius: 'xs',
}

export const RadiusSm = Template.bind({})
RadiusSm.args = {
	radius: 'sm',
}

export const RadiusMd = Template.bind({})
RadiusMd.args = {
	radius: 'md',
}

export const RadiusLg = Template.bind({})
RadiusLg.args = {
	radius: 'lg',
}

export const RadiusXl = Template.bind({})
RadiusXl.args = {
	radius: 'xl',
}

export const RadiusNone = Template.bind({})
RadiusNone.args = {
	radius: 'none',
}
