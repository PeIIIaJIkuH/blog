import { type FC, Suspense } from 'react'

import { Navbar } from '@widgets/Navbar'
import { Sidebar } from '@widgets/Sidebar'
import { cls } from '@shared/helpers/cls'
import { useTheme } from '@shared/providers/ThemeProvider'

import { AppRouter } from './providers/router'

import '@shared/config/i18n'

import './styles/index.scss'

export const App: FC = () => {
	const { theme } = useTheme()

	return (
		<div className={cls('app', theme)}>
			<Suspense fallback=''>
				<Navbar/>
				<Sidebar/>
				<div className='content-page'>
					<AppRouter/>
				</div>
			</Suspense>
		</div>
	)
}
