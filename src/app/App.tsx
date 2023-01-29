import {useTheme} from 'app/providers/ThemeProvider'
import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'
import {FC, Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {classNames} from 'shared/lib/classNames/classNames'
import './styles/index.scss'

export const App: FC = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggle</button>
			<div>
				<Link to='/'>Main Page</Link>
			</div>
			<div>
				<Link to='/about'>About Page</Link>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/about' element={<AboutPage/>}/>
					<Route path='/' element={<MainPage/>}/>
				</Routes>
			</Suspense>
		</div>
	)
}
