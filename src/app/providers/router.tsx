import { type FC, type PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterProvider: FC<PropsWithChildren> = ({ children }) => <BrowserRouter>{children}</BrowserRouter>
