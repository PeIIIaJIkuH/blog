import { type FC, lazy } from 'react'

export const AboutLazy = lazy<FC>(async () => await import('./about').then(({ About }) => ({ default: About })))
