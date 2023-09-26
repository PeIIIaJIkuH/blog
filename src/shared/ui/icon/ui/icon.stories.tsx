import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Icon } from './icon'

const componentMeta: ComponentMeta<typeof Icon> = {
	title: 'shared/icon',
	component: Icon,
}

export default componentMeta

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
	type: 'home',
}

export const AllIcons = Template.bind({})
AllIcons.args = {
	type: 'home',
	color: 'default',
	size: 'md',
}
AllIcons.decorators = [
	(_, { args }) => (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
			<Icon type='article' color={args.color} size={args.size} />
			<Icon type='blog' color={args.color} size={args.size} />
			<Icon type='calendar' color={args.color} size={args.size} />
			<Icon type='copy' color={args.color} size={args.size} />
			<Icon type='eye-off' color={args.color} size={args.size} />
			<Icon type='eye' color={args.color} size={args.size} />
			<Icon type='home' color={args.color} size={args.size} />
			<Icon type='info-circle' color={args.color} size={args.size} />
			<Icon type='moon' color={args.color} size={args.size} />
			<Icon type='pencil' color={args.color} size={args.size} />
			<Icon type='send' color={args.color} size={args.size} />
			<Icon type='sun' color={args.color} size={args.size} />
			<Icon type='user' color={args.color} size={args.size} />
			<Icon type='x' color={args.color} size={args.size} />
		</div>
	),
]

export const ColorDefault = Template.bind({})
ColorDefault.args = {
	type: 'home',
	color: 'default',
}

export const ColorPrimary = Template.bind({})
ColorPrimary.args = {
	type: 'home',
	color: 'primary',
}

export const ColorSuccess = Template.bind({})
ColorSuccess.args = {
	type: 'home',
	color: 'success',
}

export const ColorDanger = Template.bind({})
ColorDanger.args = {
	type: 'home',
	color: 'danger',
}

export const ColorWarning = Template.bind({})
ColorWarning.args = {
	type: 'home',
	color: 'warning',
}

export const ColorInfo = Template.bind({})
ColorInfo.args = {
	type: 'home',
	color: 'info',
}

export const ColorLight = Template.bind({})
ColorLight.args = {
	type: 'home',
	color: 'light',
}

export const ColorDark = Template.bind({})
ColorDark.args = {
	type: 'home',
	color: 'dark',
}

export const SizeXs = Template.bind({})
SizeXs.args = {
	type: 'home',
	size: 'xs',
}

export const SizeSm = Template.bind({})
SizeSm.args = {
	type: 'home',
	size: 'sm',
}

export const SizeMd = Template.bind({})
SizeMd.args = {
	type: 'home',
	size: 'md',
}

export const SizeLg = Template.bind({})
SizeLg.args = {
	type: 'home',
	size: 'lg',
}

export const SizeXl = Template.bind({})
SizeXl.args = {
	type: 'home',
	size: 'xl',
}

export const SizeXxl = Template.bind({})
SizeXxl.args = {
	type: 'home',
	size: 'xxl',
}
