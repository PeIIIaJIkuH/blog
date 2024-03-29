import path from 'path'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
		favicon: path.resolve(__dirname, 'public', 'favicon.svg'),
	}

	const mode = env.mode || 'development'
	const port = env.port || 3000
	const analyze = env.analyze || false
	const apiUrl = env.apiUrl || 'http://localhost:8000'

	const isDev = mode === 'development'

	return buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
		analyze,
		apiUrl,
		project: 'webpack',
	})
}
