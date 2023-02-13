import { type RuleSetRule } from 'webpack'

import { buildCssLoaders } from './loaders/buildCssLoaders'
import { buildSvgLoaders } from './loaders/buildSvgLoaders'
import { type BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const babelLoader: RuleSetRule = {
		test: /\.[jt]sx?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	}

	const tsLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const scssLoader: RuleSetRule = buildCssLoaders(isDev)

	const svgLoader: RuleSetRule = buildSvgLoaders()

	const fileLoader: RuleSetRule = {
		test: /\.(png|jpe?g|gif)$/i,
		use: ['file-loader'],
	}

	return [babelLoader, tsLoader, scssLoader, svgLoader, fileLoader]
}
