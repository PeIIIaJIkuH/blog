export const createPortalWrapper = (wrapperId: string): HTMLDivElement => {
	const wrapperElement = document.createElement('div')
	wrapperElement.id = wrapperId
	;(document.getElementById('root') as HTMLElement).appendChild(wrapperElement)
	return wrapperElement
}
