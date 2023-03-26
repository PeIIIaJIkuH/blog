import axios from 'axios'

import { LS_KEYS } from 'shared/constants/local-storage'

export const api = axios.create({
	baseURL: API_URL,
})

api.interceptors.request.use(
	(config) => {
		const user = JSON.parse(localStorage.getItem(LS_KEYS.USER) ?? '{}')
		if (!user?.user || user.user === 'null') return config
		config.headers.Authorization = String(user?.user)
		return config
	},
	async (error) => await Promise.reject(error),
)
