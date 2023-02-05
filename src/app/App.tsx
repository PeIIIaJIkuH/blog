import {AppRouter} from 'app/providers/router'
import {useTheme} from 'app/providers/ThemeProvider'
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {AppRoutes, RoutePath} from 'shared/config/routeConfig/routeConfig'
import {classNames} from 'shared/lib/classNames/classNames'
import './styles/index.scss'

export const App: FC = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggle</button>
			<div>
				<Link to={RoutePath[AppRoutes.MAIN]}>Main Page</Link>
			</div>
			<div>
				<Link to={RoutePath[AppRoutes.ABOUT]}>About Page</Link>
			</div>
			<AppRouter/>
		</div>
	)
}
