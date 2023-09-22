declare module '*.module.scss' {
	type IClassNames = Record<string, string>

	const s: IClassNames
	export = s
}

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.gif'
declare module '*.svg' {
	import type React from 'react'
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>
	export default SVG
}

declare const IS_DEV: boolean
declare const API_URL: string
declare const PROJECT: 'webpack' | 'jest' | 'storybook'
