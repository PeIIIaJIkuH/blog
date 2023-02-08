import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from '@app/App'
import { ThemeProvider } from '@shared/providers/ThemeProvider'

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')
createRoot(root).render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
)
