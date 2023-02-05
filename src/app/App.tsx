import {AppRouter} from 'app/providers/router'
import {useTheme} from 'app/providers/ThemeProvider'
import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {Navbar} from 'widgets/Navbar'
import './styles/index.scss'

export const App: FC = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			<AppRouter/>
			<button onClick={toggleTheme}>toggle</button>
		</div>
	)
}
