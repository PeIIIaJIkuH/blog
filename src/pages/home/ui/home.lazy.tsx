import { type FC, lazy } from 'react'

export const HomeLazy = lazy<FC>(async () => await import('./home').then(({ Home }) => ({ default: Home })))
