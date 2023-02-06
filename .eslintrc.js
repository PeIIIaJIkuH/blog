module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'plugin:react/jsx-runtime',
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
	],
	rules: {
		'no-tabs': 'off',
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'multiline-ternary': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'i18next/no-literal-string': ['error', { markupOnly: true }],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	globals: {
		__IS_DEV__: 'readonly',
	},
}
