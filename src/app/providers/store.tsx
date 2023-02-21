import { type FC, type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

// eslint-disable-next-line boundaries/element-types
import { store } from '../store'

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => <Provider store={store}>{children}</Provider>
