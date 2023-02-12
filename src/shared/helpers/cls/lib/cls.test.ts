import { cls } from 'shared/helpers/cls'

describe('shared/helpers/cls', () => {
	it('should return empty string if no arguments are passed', () => {
		expect(cls()).toBe('')
	})

	it('should return empty string if empty string is passed', () => {
		expect(cls('')).toBe('')
	})

	it('should return the same string if only one argument is passed', () => {
		expect(cls('foo')).toBe('foo')
	})

	it('should filter out falsy values', () => {
		expect(cls('foo', false, 0, '', null, undefined)).toBe('foo')
	})

	it('should filter out falsy values from objects', () => {
		expect(cls({ foo: true, bar: false, baz: 0, qux: null, quux: undefined })).toBe('foo')
	})

	it('should return a string of classes', () => {
		expect(cls('foo', 'bar', 'baz')).toBe('foo bar baz')
	})

	it('should return a string of classes from objects', () => {
		expect(cls({ foo: true, bar: true, baz: true })).toBe('foo bar baz')
	})
})
