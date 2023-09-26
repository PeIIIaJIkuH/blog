import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { withStore } from 'shared/config/storybook'
import { type ReducerMap } from 'shared/hooks/use-lazy-module-loading'

import { addArticleCommentReducer } from '../../model/slices/add-article-comment.slice'

import { AddArticleComment } from './add-article-comment'

const reducerMap: ReducerMap = {
	addArticleComment: addArticleCommentReducer,
}

const componentMeta: ComponentMeta<typeof AddArticleComment> = {
	title: 'features/article-comment/add-article-comment',
	component: AddArticleComment,
}

export default componentMeta

const Template: ComponentStory<typeof AddArticleComment> = (args) => <AddArticleComment {...args} />

export const Default = Template.bind({})
Default.decorators = [
	withStore(
		{
			addArticleComment: {
				comment: 'Comment',
			},
		},
		reducerMap,
	),
]

export const Loading = Template.bind({})
Loading.decorators = [
	withStore(
		{
			addArticleComment: {
				comment: 'Comment',
				status: 'loading',
			},
		},
		reducerMap,
	),
]

export const Error = Template.bind({})
Error.decorators = [
	withStore(
		{
			addArticleComment: {
				comment: 'Comment',
				status: 'error',
				error: 'errors.comment_not_added',
			},
		},
		reducerMap,
	),
]
