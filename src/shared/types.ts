export type DeepPartialObject<T> = {
	[P in keyof T]?: DeepPartialObject<T[P]>
}

export type Status = 'idle' | 'loading' | 'success' | 'error'
