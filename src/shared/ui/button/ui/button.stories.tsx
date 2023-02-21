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

export const Small = Template.bind({})
Small.args = {
	children: 'Button',
	size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
	children: 'Button',
	size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
	children: 'Button',
	size: 'large',
}

export const SmallRadius = Template.bind({})
SmallRadius.args = {
	children: 'Button',
	radius: 'small',
}

export const MediumRadius = Template.bind({})
MediumRadius.args = {
	children: 'Button',
	radius: 'medium',
}

export const LargeRadius = Template.bind({})
LargeRadius.args = {
	children: 'Button',
	radius: 'large',
}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
	children: 'Button',
	color: 'primary',
	variant: 'outline',
}

export const SecondaryColor = Template.bind({})
SecondaryColor.args = {
	children: 'Button',
	color: 'secondary',
	variant: 'outline',
}

export const TertiaryColor = Template.bind({})
TertiaryColor.args = {
	children: 'Button',
	color: 'tertiary',
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
