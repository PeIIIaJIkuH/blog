import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './index.scss'
import {AboutPageLazy} from './pages/AboutPage/AboutPage.lazy'
import {MainPageLazy} from './pages/MainPage/MainPage.lazy'

export const App = () => {
	return (
		<div className='app'>
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
