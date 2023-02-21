import { type FC, type PropsWithChildren, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { createPortalWrapper } from '../lib/create-portal-wrapper'

interface PortalProps {
	wrapperId?: string
}

export const Portal: FC<PropsWithChildren<PortalProps>> = ({ wrapperId = 'portal-wrapper', children }) => {
	const [wrapperEl, setWrapperEl] = useState<HTMLElement | null>(null)

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId)
		let systemCreated = false
		if (!element) {
			systemCreated = true
			element = createPortalWrapper(wrapperId)
		}
		setWrapperEl(element)

		return () => {
			if (systemCreated && element?.parentNode) {
				element?.parentNode.removeChild(element)
			}
		}
	}, [wrapperId])

	if (wrapperEl === null) return null

	return createPortal(children, wrapperEl)
}
