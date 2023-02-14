import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('shared/ui/Button', () => {
	it('should render', () => {
		render(<Button>Test</Button>)

		expect(screen.getByTestId('button')).toBeTruthy()
	})

	it('should render with theme', () => {
		render(<Button variant='outline'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('variant-outline')
	})
})
