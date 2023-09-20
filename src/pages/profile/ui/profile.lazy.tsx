import { type FC, lazy } from 'react'

export const ProfileLazy = lazy<FC>(async () => await import('./profile').then(({ Profile }) => ({ default: Profile })))
