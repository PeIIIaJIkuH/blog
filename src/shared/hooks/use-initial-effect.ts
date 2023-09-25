import { type DependencyList, useEffect } from 'react'

export const useInitialEffect = (callback: () => void, deps: DependencyList = []) => {
	useEffect(() => {
		if (PROJECT !== 'storybook') {
			callback()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps)
}
