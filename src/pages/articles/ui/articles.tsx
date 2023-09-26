import { type FC, memo } from 'react'

import { Articles } from 'entities/article'

import s from './articles.module.scss'

export const ArticlesPage: FC = memo(() => {
	return (
		<div className={s.articlesPage}>
			<Articles />
		</div>
	)
})
