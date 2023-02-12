import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProvider } from 'shared/providers/ThemeProvider'

import { App } from './app'

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')
createRoot(root).render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
)
