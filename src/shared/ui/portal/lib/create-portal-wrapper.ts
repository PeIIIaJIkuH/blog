export const createPortalWrapper = (wrapperId: string): HTMLDivElement => {
	const wrapperElement = document.createElement('div')
	wrapperElement.id = wrapperId
	const rootElement = document.getElementById('root')
	// @ts-ignore
	rootElement.appendChild(wrapperElement)
	return wrapperElement
}
