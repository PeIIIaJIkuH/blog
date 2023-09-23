import { Component, type ErrorInfo, type ReactNode, Suspense, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { PageError } from 'shared/ui/page-error'

const Error: FC = () => {
	const { t } = useTranslation()

	return <PageError message={t('page_error.message')} fullHeight />
}

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		console.log(error)
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		const { children } = this.props
		const { hasError } = this.state
		if (hasError) {
			return (
				<Suspense fallback=''>
					<Error />
				</Suspense>
			)
		}

		return children
	}
}
