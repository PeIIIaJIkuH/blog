import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { ProgressPlugin, type WebpackPluginInstance } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type BuildOptions } from './types/config'

export function buildPlugins({ paths, isDev, analyze, apiUrl }: BuildOptions): WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({
			template: paths.html,
			favicon: paths.favicon,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			IS_DEV: JSON.stringify(isDev),
			API_URL: JSON.stringify(apiUrl),
		}),
		...(isDev ? [new ReactRefreshWebpackPlugin({ overlay: false }), new webpack.HotModuleReplacementPlugin()] : []),
		...(analyze ? [new BundleAnalyzerPlugin()] : []),
	]
}
