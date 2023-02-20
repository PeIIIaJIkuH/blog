export const createPortalWrapper = (wrapperId: string): HTMLDivElement => {
	const wrapperElement = document.createElement('div')
	wrapperElement.id = wrapperId
	document.body.appendChild(wrapperElement)
	return wrapperElement
}
