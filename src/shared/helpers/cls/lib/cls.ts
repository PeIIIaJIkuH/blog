type Mod = string | boolean | number | null | undefined | Record<string | number, boolean | number | null | undefined>

export const cls = (...mods: Mod[]): string => {
	return mods.map(mod => {
		if (typeof mod === 'string') {
			return mod
		}
		if (typeof mod === 'number') {
			return mod ? String(mod) : ''
		}
		if (typeof mod === 'boolean') {
			return ''
		}
		if (mod === null || mod === undefined) {
			return ''
		}
		return Object.keys(mod)
			.filter(key => mod[key])
			.join(' ')
	}).join(' ').trim()
}
