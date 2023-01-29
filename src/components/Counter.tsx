import {useState} from 'react'

import s from './Counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(prev => prev + 1)
	}

	return (
		<div>
			<p>Count: {count}</p>
			<button className={s.button} onClick={increment}>Increment</button>
		</div>
	)
}
