import axios from 'axios'

import { LS_KEYS } from 'shared/constants/local-storage'

export const api = axios.create({
	baseURL: API_URL,
	headers: {
		Authorization: localStorage.getItem(LS_KEYS.USER),
	},
})
