import { type FC, Suspense } from 'react'

import { cls } from 'shared/helpers/cls'
import { useTheme } from 'shared/providers/ThemeProvider'
import { Header } from 'widgets/Header'
import { Sidebar } from 'widgets/Sidebar'

import { AppRouter } from './providers/router'
import 'shared/config/i18n'

import './styles/index.scss'

export const App: FC = () => {
	const { theme } = useTheme()

	return (
		<div className={cls('app', theme)}>
			<Suspense fallback=''>
				<Header />
				<Sidebar />
				<div className='content-page'>
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}
