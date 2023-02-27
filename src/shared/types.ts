export type DeepPartialObject<T> = {
	[P in keyof T]?: DeepPartialObject<T[P]>
}
