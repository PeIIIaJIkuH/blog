import axios from 'axios'

import { LS_KEYS } from 'shared/constants/local-storage'

export const api = axios.create({
	baseURL: 'http://localhost:8000',
	// TODO: Replace with global variable API_URL
	headers: {
		Authorization: localStorage.getItem(LS_KEYS.USER),
	},
})
