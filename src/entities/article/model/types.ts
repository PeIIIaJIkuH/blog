export interface Article {
	id: string
	title: string
	subtitle: string
	imgUrl: string | null
	views: number
	createdAt: string
	tags: string[]
	blocks: ArticleBlock[]
}

export type ArticleBlock = TextBlock | ImageBlock | CodeBlock

export interface TextBlock {
	type: 'text'
	data: {
		title?: string
		content: string[]
	}
}

export interface ImageBlock {
	type: 'image'
	data: {
		caption: string
		url: string
	}
}

export interface CodeBlock {
	type: 'code'
	data: {
		language: string
		code: string
	}
}
