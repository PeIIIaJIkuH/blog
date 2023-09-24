import { useCallback, useState } from 'react'

import { SIDEBAR_WIDTH } from '../constants'

const LOCAL_STORAGE_SIDEBAR_KEY = 'sidebar_open'

export const useSidebarState = () => {
	const [isOpen, setIsOpen] = useState(localStorage.getItem(LOCAL_STORAGE_SIDEBAR_KEY) !== 'false' ?? false)
	const width = isOpen ? SIDEBAR_WIDTH.OPEN : SIDEBAR_WIDTH.COLLAPSED

	const toggle = useCallback(() => {
		setIsOpen((prev) => {
			const next = !prev
			localStorage.setItem(LOCAL_STORAGE_SIDEBAR_KEY, next.toString())
			return next
		})
	}, [])

	return {
		isOpen,
		width,
		toggle,
	}
}
