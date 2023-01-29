import {FC, Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {classNames} from './helpers/classNames/classNames'
import {AboutPageLazy} from './pages/AboutPage/AboutPage.lazy'
import {MainPageLazy} from './pages/MainPage/MainPage.lazy'
import './styles/index.scss'
import {useTheme} from './theme/useTheme'

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
					<Route path='/about' element={<AboutPageLazy/>}/>
					<Route path='/' element={<MainPageLazy/>}/>
				</Routes>
			</Suspense>
		</div>
	)
}
