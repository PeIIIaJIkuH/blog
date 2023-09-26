import { type FC, memo, useCallback, type KeyboardEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { Button } from 'shared/ui/button'
import { Icon } from 'shared/ui/icon'
import { Input } from 'shared/ui/input'
import { Typography } from 'shared/ui/typography'

import {
	getAddArticleCommentComment,
	getAddArticleCommentError,
	getAddArticleCommentStatus,
} from '../../model/selectors/add-article-comment.selectors'
import { addComment } from '../../model/services/add-article-comment.services'
import { addArticleCommentActions, addArticleCommentReducer } from '../../model/slices/add-article-comment.slice'

import s from './add-article-comment.module.scss'

const reducerMap: ReducerMap = {
	addArticleComment: addArticleCommentReducer,
}

export const AddArticleComment: FC = memo(() => {
	const comment = useAppSelector(getAddArticleCommentComment)
	const status = useAppSelector(getAddArticleCommentStatus)
	const error = useAppSelector(getAddArticleCommentError)
	const dispatch = useAppDispatch()
	const { t } = useTranslation('article-details')

	useLazyModuleLoading(reducerMap)

	const onChange = useCallback(
		(value: string) => {
			dispatch(addArticleCommentActions.setComment(value))
		},
		[dispatch],
	)

	const reset = useCallback(() => {
		if (status === 'loading') return
		dispatch(addArticleCommentActions.setComment(''))
	}, [dispatch, status])

	const onSubmit = useCallback(async () => {
		if (status === 'loading' || !comment.trim()) return
		await dispatch(addComment())
	}, [comment, dispatch, status])

	const onKeydown: KeyboardEventHandler<HTMLInputElement> = useCallback(
		(e) => {
			if (e.key === 'Enter') {
				void onSubmit()
			} else if (e.key === 'Escape') {
				reset()
			}
		},
		[onSubmit, reset],
	)

	return (
		<div className={s.addArticleComment}>
			<div className={s.inner}>
				<Input
					placeholder={t('comments.add') ?? ''}
					value={comment}
					onChange={onChange}
					clearable
					fullWidth
					onKeyDown={onKeydown}
				/>
				<Button loading={status === 'loading'} icon onClick={onSubmit}>
					<Icon type='send' size={21} />
				</Button>
			</div>
			{error && <Typography text={t(error)} color='danger' size='sm' />}
		</div>
	)
})
