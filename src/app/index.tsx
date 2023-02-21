import { type FC, Suspense } from 'react'

import { Routing } from 'pages'
import { cls } from 'shared/helpers/cls'
import { Header } from 'widgets/header'
import { Sidebar } from 'widgets/sidebar'

import 'shared/config/i18n'

import './styles/index.scss'

export const App: FC = () => {
	return (
		<div className={cls('app')}>
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
