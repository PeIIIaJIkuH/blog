module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard-with-typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'prettier',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:boundaries/recommended',
		'plugin:storybook/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint', 'i18next', 'prettier'],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: true,
			node: true,
		},
		'boundaries/elements': [
			{
				type: 'app',
				pattern: 'app/*',
			},
			{
				type: 'processes',
				pattern: 'processes/*',
			},
			{
				type: 'pages',
				pattern: 'pages/*',
			},
			{
				type: 'widgets',
				pattern: 'widgets/*',
			},
			{
				type: 'features',
				pattern: 'features/*',
			},
			{
				type: 'entities',
				pattern: 'entities/*',
			},
			{
				type: 'shared',
				pattern: 'shared/*',
			},
		],
		'boundaries/ignore': ['**/*.test.*', '**/*.stories.*', './src/app/store/*'],
	},
	rules: {
		'i18next/no-literal-string': [
			'warn',
			{
				markupOnly: true,
			},
		],
		'prettier/prettier': 'error',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/prefer-ts-expect-error': 'off',
		'linebreak-style': 0,
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				'newlines-between': 'always',
				pathGroups: [
					{
						group: 'internal',
						position: 'after',
						pattern: '~/processes/**',
					},
					{
						group: 'internal',
						position: 'after',
						pattern: '~/pages/**',
					},
					{
						group: 'internal',
						position: 'after',
						pattern: '~/widgets/**',
					},
					{
						group: 'internal',
						position: 'after',
						pattern: '~/features/**',
					},
					{
						group: 'internal',
						position: 'after',
						pattern: '~/entities/**',
					},
					{
						group: 'internal',
						position: 'after',
						pattern: '~/shared/**',
					},
				],
				pathGroupsExcludedImportTypes: ['builtin'],
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			},
		],
		'no-restricted-imports': [
			'error',
			{
				patterns: [
					{
						message: 'Private imports are prohibited, use public imports instead',
						group: ['~/app/**'],
					},
					{
						message: 'Private imports are prohibited, use public imports instead',
						group: ['~/processes/*/**'],
					},
					{
						message: 'Private imports are prohibited, use public imports instead',
						group: ['~/pages/*/**'],
					},
					{
						message: 'Private imports are prohibited, use public imports instead',
						group: ['~/widgets/*/**'],
					},
					{
						message: 'Private imports are prohibited, use public imports instead',
						group: ['~/features/*/**'],
					},
					{
						message: 'Private imports are prohibited, use public imports instead',
						group: ['~/entities/*/**'],
					},
					{
						message: 'Private imports are prohibited, use public imports instead',
						group: ['~/shared/*/*/**'],
					},
					{
						message: 'Prefer absolute imports instead of relatives (for root modules)',
						group: ['../**/app'],
					},
					{
						message: 'Prefer absolute imports instead of relatives (for root modules)',
						group: ['../**/processes'],
					},
					{
						message: 'Prefer absolute imports instead of relatives (for root modules)',
						group: ['../**/pages'],
					},
					{
						message: 'Prefer absolute imports instead of relatives (for root modules)',
						group: ['../**/widgets'],
					},
					{
						message: 'Prefer absolute imports instead of relatives (for root modules)',
						group: ['../**/features'],
					},
					{
						message: 'Prefer absolute imports instead of relatives (for root modules)',
						group: ['../**/entities'],
					},
					{
						message: 'Prefer absolute imports instead of relatives (for root modules)',
						group: ['../**/shared'],
					},
				],
			},
		],
		'boundaries/element-types': [
			'warn',
			{
				default: 'disallow',
				rules: [
					{
						from: 'app',
						allow: ['processes', 'pages', 'widgets', 'features', 'entities', 'shared'],
					},
					{
						from: 'processes',
						allow: ['pages', 'widgets', 'features', 'entities', 'shared'],
					},
					{
						from: 'pages',
						allow: ['widgets', 'features', 'entities', 'shared'],
					},
					{
						from: 'widgets',
						allow: ['features', 'entities', 'shared'],
					},
					{
						from: 'features',
						allow: ['entities', 'shared'],
					},
					{
						from: 'entities',
						allow: ['shared'],
					},
					{
						from: 'shared',
						allow: ['shared'],
					},
				],
			},
		],
	},
	globals: {
		IS_DEV: 'readonly',
		ANALYZE: 'readonly',
	},
	overrides: [
		{
			files: ['**/*.test.*'],
			rules: {
				'boundaries/element-types': 'off',
				'i18next/no-literal-string': 'off',
			},
		},
	],
}
