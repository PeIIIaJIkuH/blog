export type DeepPartialObject<T> = {
	[P in keyof T]?: DeepPartialObject<T[P]>
}

export type Status = 'idle' | 'loading' | 'success' | 'error'

export type RequiredOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
	{ [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>> }[Keys]
