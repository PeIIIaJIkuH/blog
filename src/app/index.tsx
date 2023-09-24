import { type FC, Suspense, type CSSProperties, useMemo } from 'react'

import { Routing } from 'pages'
import { Header } from 'widgets/header'
import { Sidebar, useSidebarState } from 'widgets/sidebar'

import 'shared/config/i18n'

import './styles/index.scss'

export const App: FC = () => {
	const { isOpen, width, toggle } = useSidebarState()
	const pageStyles: CSSProperties = useMemo(() => ({ marginLeft: width }), [width])

	return (
		<div className='app'>
			<Suspense fallback=''>
				<Header />
				<Sidebar isOpen={isOpen} width={width} toggle={toggle} />
				<div className='content-page' style={pageStyles}>
					<Routing />
				</div>
			</Suspense>
		</div>
	)
}
