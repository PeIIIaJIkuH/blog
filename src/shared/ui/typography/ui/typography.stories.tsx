import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Typography } from './typography'

const componentMeta: ComponentMeta<typeof Typography> = {
	title: 'shared/typography',
	component: Typography,
}

export default componentMeta

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {
	text: 'Default typography',
}

export const SizeXs = Template.bind({})
SizeXs.args = {
	text: 'Size xs typography',
	size: 'xs',
}

export const SizeSm = Template.bind({})
SizeSm.args = {
	text: 'Size sm typography',
	size: 'sm',
}

export const SizeMd = Template.bind({})
SizeMd.args = {
	text: 'Size md typography',
	size: 'md',
}

export const SizeLg = Template.bind({})
SizeLg.args = {
	text: 'Size lg typography',
	size: 'lg',
}

export const SizeXl = Template.bind({})
SizeXl.args = {
	text: 'Size xl typography',
	size: 'xl',
}

export const ColorDefault = Template.bind({})
ColorDefault.args = {
	text: 'Color default typography',
	color: 'default',
}

export const ColorPrimary = Template.bind({})
ColorPrimary.args = {
	text: 'Color primary typography',
	color: 'primary',
}

export const ColorSuccess = Template.bind({})
ColorSuccess.args = {
	text: 'Color success typography',
	color: 'success',
}

export const ColorDanger = Template.bind({})
ColorDanger.args = {
	text: 'Color danger typography',
	color: 'danger',
}

export const ColorWarning = Template.bind({})
ColorWarning.args = {
	text: 'Color warning typography',
	color: 'warning',
}

export const ColorInfo = Template.bind({})
ColorInfo.args = {
	text: 'Color info typography',
	color: 'info',
}

export const WeightLight = Template.bind({})
WeightLight.args = {
	text: 'Weight light typography',
	weight: 'light',
}

export const WeightNormal = Template.bind({})
WeightNormal.args = {
	text: 'Weight normal typography',
	weight: 'normal',
}

export const WeightBold = Template.bind({})
WeightBold.args = {
	text: 'Weight bold typography',
	weight: 'bold',
}

export const AlignLeft = Template.bind({})
AlignLeft.args = {
	text: 'Align left typography',
	align: 'left',
}

export const AlignCenter = Template.bind({})
AlignCenter.args = {
	text: 'Align center typography',
	align: 'center',
}

export const AlignRight = Template.bind({})
AlignRight.args = {
	text: 'Align right typography',
	align: 'right',
}

export const TransformNone = Template.bind({})
TransformNone.args = {
	text: 'Transform none typography',
	transform: 'none',
}

export const TransformUppercase = Template.bind({})
TransformUppercase.args = {
	text: 'Transform uppercase typography',
	transform: 'uppercase',
}

export const TransformLowercase = Template.bind({})
TransformLowercase.args = {
	text: 'Transform lowercase typography',
	transform: 'lowercase',
}

export const TransformCapitalize = Template.bind({})
TransformCapitalize.args = {
	text: 'Transform capitalize typography',
	transform: 'capitalize',
}

export const DecorationNone = Template.bind({})
DecorationNone.args = {
	text: 'Decoration none typography',
	decoration: 'none',
}

export const DecorationUnderline = Template.bind({})
DecorationUnderline.args = {
	text: 'Decoration underline typography',
	decoration: 'underline',
}

export const DecorationLineThrough = Template.bind({})
DecorationLineThrough.args = {
	text: 'Decoration line-through typography',
	decoration: 'line-through',
}

export const ComponentSpanAs = Template.bind({})
ComponentSpanAs.args = {
	text: 'Component span typography',
	as: 'span',
}

export const ComponentDiv = Template.bind({})
ComponentDiv.args = {
	text: 'Component div typography',
	as: 'div',
}

export const ComponentP = Template.bind({})
ComponentP.args = {
	text: 'Component p typography',
	as: 'p',
}

export const ComponentH1 = Template.bind({})
ComponentH1.args = {
	text: 'Component h1 typography',
	as: 'h1',
}

export const ComponentH2 = Template.bind({})
ComponentH2.args = {
	text: 'Component h2 typography',
	as: 'h2',
}

export const ComponentH3 = Template.bind({})
ComponentH3.args = {
	text: 'Component h3 typography',
	as: 'h3',
}

export const ComponentH4 = Template.bind({})
ComponentH4.args = {
	text: 'Component h4 typography',
	as: 'h4',
}

export const ComponentH5 = Template.bind({})
ComponentH5.args = {
	text: 'Component h5 typography',
	as: 'h5',
}

export const ComponentH6 = Template.bind({})
ComponentH6.args = {
	text: 'Component h6 typography',
	as: 'h6',
}
