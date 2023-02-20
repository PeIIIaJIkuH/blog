import { type FC } from 'react'

import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/Button'

import s from './BurgerButton.module.scss'

interface BurgerButtonProps {
	className?: string
	isOpen: boolean
	toggle: () => void
}

export const BurgerButton: FC<BurgerButtonProps> = ({ className, isOpen, toggle }) => {
	return (
		<Button className={cls(s.BurgerButton, className, isOpen && s.open)} onClick={toggle}>
			<svg className={s.svg} stroke='var(--current-color)' fill='none' viewBox='0 0 120 120' width={36}>
				<path
					className={s.line}
					strokeWidth={6}
					strokeLinecap='round'
					strokeLinejoin='round'
					d='m 90 60 h -60 a 1 1 0 0 1 0 -10 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 60'
				/>
			</svg>
		</Button>
	)
}
