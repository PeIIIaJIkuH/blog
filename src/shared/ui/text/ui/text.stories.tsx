import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Text } from './text'

const componentMeta: ComponentMeta<typeof Text> = {
	title: 'shared/text',
	component: Text,
}

export default componentMeta

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
	text: 'Default text',
}

export const SizeXs = Template.bind({})
SizeXs.args = {
	text: 'Size xs text',
	size: 'xs',
}

export const SizeSm = Template.bind({})
SizeSm.args = {
	text: 'Size sm text',
	size: 'sm',
}

export const SizeMd = Template.bind({})
SizeMd.args = {
	text: 'Size md text',
	size: 'md',
}

export const SizeLg = Template.bind({})
SizeLg.args = {
	text: 'Size lg text',
	size: 'lg',
}

export const SizeXl = Template.bind({})
SizeXl.args = {
	text: 'Size xl text',
	size: 'xl',
}

export const ColorDefault = Template.bind({})
ColorDefault.args = {
	text: 'Color default text',
	color: 'default',
}

export const ColorPrimary = Template.bind({})
ColorPrimary.args = {
	text: 'Color primary text',
	color: 'primary',
}

export const ColorSuccess = Template.bind({})
ColorSuccess.args = {
	text: 'Color success text',
	color: 'success',
}

export const ColorDanger = Template.bind({})
ColorDanger.args = {
	text: 'Color danger text',
	color: 'danger',
}

export const ColorWarning = Template.bind({})
ColorWarning.args = {
	text: 'Color warning text',
	color: 'warning',
}

export const ColorInfo = Template.bind({})
ColorInfo.args = {
	text: 'Color info text',
	color: 'info',
}

export const WeightLight = Template.bind({})
WeightLight.args = {
	text: 'Weight light text',
	weight: 'light',
}

export const WeightNormal = Template.bind({})
WeightNormal.args = {
	text: 'Weight normal text',
	weight: 'normal',
}

export const WeightBold = Template.bind({})
WeightBold.args = {
	text: 'Weight bold text',
	weight: 'bold',
}

export const AlignLeft = Template.bind({})
AlignLeft.args = {
	text: 'Align left text',
	align: 'left',
}

export const AlignCenter = Template.bind({})
AlignCenter.args = {
	text: 'Align center text',
	align: 'center',
}

export const AlignRight = Template.bind({})
AlignRight.args = {
	text: 'Align right text',
	align: 'right',
}

export const TransformNone = Template.bind({})
TransformNone.args = {
	text: 'Transform none text',
	transform: 'none',
}

export const TransformUppercase = Template.bind({})
TransformUppercase.args = {
	text: 'Transform uppercase text',
	transform: 'uppercase',
}

export const TransformLowercase = Template.bind({})
TransformLowercase.args = {
	text: 'Transform lowercase text',
	transform: 'lowercase',
}

export const TransformCapitalize = Template.bind({})
TransformCapitalize.args = {
	text: 'Transform capitalize text',
	transform: 'capitalize',
}

export const DecorationNone = Template.bind({})
DecorationNone.args = {
	text: 'Decoration none text',
	decoration: 'none',
}

export const DecorationUnderline = Template.bind({})
DecorationUnderline.args = {
	text: 'Decoration underline text',
	decoration: 'underline',
}

export const DecorationLineThrough = Template.bind({})
DecorationLineThrough.args = {
	text: 'Decoration line-through text',
	decoration: 'line-through',
}

export const ComponentSpan = Template.bind({})
ComponentSpan.args = {
	text: 'Component span text',
	component: 'span',
}

export const ComponentDiv = Template.bind({})
ComponentDiv.args = {
	text: 'Component div text',
	component: 'div',
}

export const ComponentP = Template.bind({})
ComponentP.args = {
	text: 'Component p text',
	component: 'p',
}
