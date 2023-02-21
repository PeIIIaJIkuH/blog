import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeSwitcher } from './theme-switcher'

const componentMeta: ComponentMeta<typeof ThemeSwitcher> = {
	title: 'features/theme-switcher',
	component: ThemeSwitcher,
}

export default componentMeta

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Default = Template.bind({})
Default.args = {}
