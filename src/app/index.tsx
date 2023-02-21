import { type FC, Suspense } from 'react'

import { Routing } from 'pages'
import { cls } from 'shared/helpers/cls'
import { useTheme } from 'shared/providers/theme'
import { Header } from 'widgets/header'
import { Sidebar } from 'widgets/sidebar'

import 'shared/config/i18n'

import './styles/index.scss'

export const App: FC = () => {
	const { theme } = useTheme()
	const className = cls('app', theme)

	return (
		<div className={className}>
			<Suspense fallback=''>
				<Header />
				<Sidebar />
				<div className='content-page'>
					<Routing />
				</div>
			</Suspense>
		</div>
	)
}
