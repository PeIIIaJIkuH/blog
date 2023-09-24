import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Image } from './image'

const componentMeta: ComponentMeta<typeof Image> = {
	title: 'shared/image',
	component: Image,
}

export default componentMeta

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 600,
	height: 400,
}

export const OnlyWidth = Template.bind({})
OnlyWidth.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 400,
}

export const OnlyHeight = Template.bind({})
OnlyHeight.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	height: 400,
}

export const CircleWithHeight = Template.bind({})
CircleWithHeight.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	height: 400,
	circle: true,
}

export const CircleWithWidth = Template.bind({})
CircleWithWidth.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 400,
	circle: true,
}

export const CircleHeightIsSmaller = Template.bind({})
CircleHeightIsSmaller.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 600,
	height: 400,
	circle: true,
}

export const CircleWidthIsSmaller = Template.bind({})
CircleWidthIsSmaller.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 400,
	height: 600,
	circle: true,
}

export const FitContain = Template.bind({})
FitContain.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 600,
	height: 400,
	fit: 'contain',
}

export const FitCover = Template.bind({})
FitCover.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 600,
	height: 400,
	fit: 'cover',
}

export const RadiusNone = Template.bind({})
RadiusNone.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 600,
	height: 400,
	radius: 'none',
}

export const RadiusXs = Template.bind({})
RadiusXs.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 600,
	height: 400,
	radius: 'xs',
}

export const RadiusSm = Template.bind({})
RadiusSm.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 600,
	height: 400,
	radius: 'sm',
}

export const RadiusMd = Template.bind({})
RadiusMd.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 600,
	height: 400,
	radius: 'md',
}

export const RadiusLg = Template.bind({})
RadiusLg.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 600,
	height: 400,
	radius: 'lg',
}

export const RadiusXl = Template.bind({})
RadiusXl.args = {
	src: 'https://placehold.co/600x400',
	alt: 'placeholder image',
	width: 600,
	height: 400,
	radius: 'xl',
}
