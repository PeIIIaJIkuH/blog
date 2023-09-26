import { type FC, type SVGProps } from 'react'

import ArticleIcon from 'shared/assets/icons/article.svg'
import BlogIcon from 'shared/assets/icons/blog.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import CopyIcon from 'shared/assets/icons/copy.svg'
import EyeOffIcon from 'shared/assets/icons/eye-off.svg'
import EyeIcon from 'shared/assets/icons/eye.svg'
import HomeIcon from 'shared/assets/icons/home.svg'
import InfoCircleIcon from 'shared/assets/icons/info-circle.svg'
import MoonIcon from 'shared/assets/icons/moon.svg'
import PencilIcon from 'shared/assets/icons/pencil.svg'
import SendIcon from 'shared/assets/icons/send.svg'
import SunIcon from 'shared/assets/icons/sun.svg'
import UserIcon from 'shared/assets/icons/user.svg'
import XIcon from 'shared/assets/icons/x.svg'

import { type IconType } from './types'

export const icons: Record<IconType, FC<SVGProps<SVGSVGElement>>> = {
	article: ArticleIcon,
	blog: BlogIcon,
	calendar: CalendarIcon,
	copy: CopyIcon,
	'eye-off': EyeOffIcon,
	eye: EyeIcon,
	home: HomeIcon,
	'info-circle': InfoCircleIcon,
	moon: MoonIcon,
	pencil: PencilIcon,
	send: SendIcon,
	sun: SunIcon,
	user: UserIcon,
	x: XIcon,
}

export const sizeMap: Record<string, number> = {
	xs: 16,
	sm: 20,
	md: 24,
	lg: 28,
	xl: 32,
	xxl: 36,
}
