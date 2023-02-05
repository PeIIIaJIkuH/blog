import path from 'path'
import {ResolveOptions} from 'webpack'

import {BuildOptions} from './types/config'

export function buildResolvers({paths}: BuildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {
			'@app': path.join(paths.src, 'app'),
			'@pages': path.join(paths.src, 'pages'),
			'@widgets': path.join(paths.src, 'widgets'),
			'@features': path.join(paths.src, 'features'),
			'@entities': path.join(paths.src, 'entities'),
			'@shared': path.join(paths.src, 'shared'),
		},
	}
}
