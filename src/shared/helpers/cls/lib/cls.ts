type Mod = string | boolean | number | null | undefined | Record<string | number, boolean | number | null | undefined>

const validate = (mod: Mod): string => {
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
		.filter((key) => mod[key])
		.join(' ')
}

export const cls = (...mods: Mod[]): string =>
	mods
		.reduce((acc: string[], mod) => {
			const modString = validate(mod)
			if (modString) {
				acc.push(modString)
			}
			return acc
		}, [])
		.join(' ')
		.trim()
