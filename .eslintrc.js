const imageExtensions = 'jpe?g|png|gif|svg'
const styleExtensions = 'scss'

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard-with-typescript',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint', 'i18next', 'simple-import-sort', 'prettier'],
	rules: {
		'i18next/no-literal-string': ['warn', { markupOnly: true }],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'prettier/prettier': 'error',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
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
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							['^react$', '^[a-z@]'],
							[
								'^@app',
								'^@pages',
								'^@widgets',
								'^@features',
								'^@entities',
								`^@shared(?![^ ]+(${imageExtensions}|${styleExtensions}))`,
							],
							['^\\.\\.(?!/?$)', '^\\.\\./?$'],
							['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
							['^\\u0000'],
							[`@shared(?=[^ ]+(${styleExtensions}))`, `^.+\\.(${styleExtensions})$`],
							[`@shared(?=[^ ]+(${imageExtensions}))`, `.(${imageExtensions})$`],
						],
					},
				],
			},
		},
	],
}
