import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { ProgressPlugin, type WebpackPluginInstance } from 'webpack'

import { type BuildOptions } from './types/config'

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			IS_DEV: JSON.stringify(isDev),
		}),
		...(isDev ? [new ReactRefreshWebpackPlugin({ overlay: false }), new webpack.HotModuleReplacementPlugin()] : []),
	]
}
