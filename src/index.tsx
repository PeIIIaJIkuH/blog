import { createRoot } from 'react-dom/client'

import { App } from 'app'
import { ErrorBoundary } from 'app/providers/error-boundary'
import { RouterProvider } from 'app/providers/router'
import { StoreProvider } from 'app/providers/store'
import { ThemeProvider } from 'shared/providers/theme'

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')
createRoot(root).render(
	<ErrorBoundary>
		<StoreProvider>
			<RouterProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</RouterProvider>
		</StoreProvider>
	</ErrorBoundary>,
)
