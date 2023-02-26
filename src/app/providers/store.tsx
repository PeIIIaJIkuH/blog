import { type FC, type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '../store'

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			{children}
		</PersistGate>
	</Provider>
)
