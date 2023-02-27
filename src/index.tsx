import { createRoot } from 'react-dom/client'

import { App } from 'app'
import { ErrorBoundary } from 'app/providers/error-boundary'
import { RouterProvider } from 'app/providers/router'
import { StoreProvider } from 'app/providers/store'
import { ThemeProvider } from 'shared/providers/theme'

createRoot(document.getElementById('root') as HTMLElement).render(
	<ErrorBoundary>
		<RouterProvider>
			<StoreProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</StoreProvider>
		</RouterProvider>
	</ErrorBoundary>,
)
