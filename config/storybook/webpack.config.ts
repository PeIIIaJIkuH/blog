import path from 'path'

import { type Configuration, type RuleSetRule } from 'webpack'

import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import { buildSvgLoaders } from '../build/loaders/buildSvgLoaders'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: Configuration }) => {
	const paths: Pick<BuildPaths, 'src'> = {
		src: path.resolve(__dirname, '..', '..', 'src'),
	}
	config.resolve?.modules?.push(paths.src)
	config.resolve?.extensions?.push('.ts', '.tsx')

	config.module?.rules?.push(buildCssLoaders(true))

	if (config.module?.rules) {
		config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
			if ((rule.test?.toString() ?? '').includes('svg')) {
				return {
					...rule,
					exclude: /\.svg$/i,
				}
			}
			return rule
		})
	}
	config.module?.rules?.push(buildSvgLoaders())

	return config
}
