const imageExtensions = 'jpe?g|png|gif|svg'
const styleExtensions = 'scss'

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
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
		'simple-import-sort',
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
		'i18next/no-literal-string': ['warn', { markupOnly: true }],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'@typescript-eslint/no-redeclare': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	globals: {
		IS_DEV: 'readonly',
	},
	overrides: [
		{
			files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
			rules: {
				'simple-import-sort/imports': ['error', {
					groups: [
						['^react$', '^[a-z@]'],
						['^@app', '^@pages', '^@widgets', '^@features', '^@entities', `^@shared(?![^ ]+(${imageExtensions}|${styleExtensions}))`],
						['^\\.\\.(?!/?$)', '^\\.\\./?$'],
						['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
						['^\\u0000'],
						[`@shared(?=[^ ]+(${styleExtensions}))`, `^.+\\.(${styleExtensions})$`],
						[`@shared(?=[^ ]+(${imageExtensions}))`, `.(${imageExtensions})$`],
					],
				}],
			},
		},
	],
}
