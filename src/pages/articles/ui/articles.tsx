import { type FC, memo } from 'react'

import { ViewArticles } from 'features/view-articles'

import s from './articles.module.scss'

export const Articles: FC = memo(() => {
	return (
		<div className={s.articles}>
			<ViewArticles />
		</div>
	)
})
