import { type FC, Suspense } from 'react'

import { useTheme } from '@shared/providers/ThemeProvider'
import { cls } from '@shared/helpers/cls'
import { Navbar } from '@widgets/Navbar'
import { Sidebar } from '@widgets/Sidebar'

import { AppRouter } from './providers/router'

import '@shared/config/i18n'

import './styles/index.scss'

export const App: FC = () => {
	const { theme } = useTheme()

	return (
		<div className={cls('app', theme)}>
			<Suspense fallback=''>
				<Navbar/>
				<div className='content-page'>
					<Sidebar/>
					<AppRouter/>
				</div>
			</Suspense>
		</div>
	)
}
