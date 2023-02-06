import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import {App} from '@app/App'
import { ThemeProvider } from '@shared/providers/ThemeProvider'

createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<ThemeProvider>
			<App/>
		</ThemeProvider>
	</BrowserRouter>
)
