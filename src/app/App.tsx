import {FC} from 'react'

import {useTheme} from '@app/../shared/ui/ThemeProvider'
import {cls} from '@shared/helpers/cls'
import {Navbar} from '@widgets/Navbar'

import {AppRouter} from './providers/router'

import './styles/index.scss'

export const App: FC = () => {
	const {theme} = useTheme()

	return (
		<div className={cls('app', theme)}>
			<Navbar/>
			<AppRouter/>
		</div>
	)
}
