import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Button } from './button'

const componentMeta: ComponentMeta<typeof Button> = {
	title: 'shared/button',
	component: Button,
}

export default componentMeta

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'Button',
}

export const Text = Template.bind({})
Text.args = {
	text: 'Button',
}

export const Outline = Template.bind({})
Outline.args = {
	children: 'Button',
	variant: 'outline',
}

export const Filled = Template.bind({})
Filled.args = {
	children: 'Button',
	variant: 'filled',
}

export const Xs = Template.bind({})
Xs.args = {
	children: 'Button',
	size: 'xs',
}

export const Sm = Template.bind({})
Sm.args = {
	children: 'Button',
	size: 'sm',
}

export const Md = Template.bind({})
Md.args = {
	children: 'Button',
	size: 'md',
}

export const Lg = Template.bind({})
Lg.args = {
	children: 'Button',
	size: 'lg',
}

export const Xl = Template.bind({})
Xl.args = {
	children: 'Button',
	size: 'xl',
}

export const RadiusXs = Template.bind({})
RadiusXs.args = {
	children: 'Button',
	radius: 'xs',
}

export const RadiusSm = Template.bind({})
RadiusSm.args = {
	children: 'Button',
	radius: 'sm',
}

export const RadiusMd = Template.bind({})
RadiusMd.args = {
	children: 'Button',
	radius: 'md',
}

export const RadiusLg = Template.bind({})
RadiusLg.args = {
	children: 'Button',
	radius: 'lg',
}

export const RadiusXl = Template.bind({})
RadiusXl.args = {
	children: 'Button',
	radius: 'xl',
}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
	children: 'Button',
	color: 'primary',
	variant: 'outline',
}

export const SuccessColor = Template.bind({})
SuccessColor.args = {
	children: 'Button',
	color: 'success',
	variant: 'outline',
}

export const DangerColor = Template.bind({})
DangerColor.args = {
	children: 'Button',
	color: 'danger',
	variant: 'outline',
}

export const WarningColor = Template.bind({})
WarningColor.args = {
	children: 'Button',
	color: 'warning',
	variant: 'outline',
}

export const InfoColor = Template.bind({})
InfoColor.args = {
	children: 'Button',
	color: 'info',
	variant: 'outline',
}

export const Uppercase = Template.bind({})
Uppercase.args = {
	children: 'Button',
	uppercase: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
	children: 'Button',
	disabled: true,
}
