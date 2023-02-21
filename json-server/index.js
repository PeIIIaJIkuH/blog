const fs = require('fs')
const path = require('path')

const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(jsonServer.defaults())
server.use(jsonServer.bodyParser)

server.use(async (req, res, next) => {
	await new Promise((resolve) => setTimeout(resolve, 800))
	next()
})

server.use((req, res, next) => {
	console.log('req.headers', req.headers)
	if (!req.headers.authorization) {
		console.log('no authorization header')
		return res.status(401).json({ message: 'Unauthorized' })
	}

	next()
})

server.post('/login', (req, res) => {
	console.log('body', req.body)
	const { username, password } = req.body
	const db = JSON.parse(
		fs.readFileSync(path.resolve(__dirname, 'db.json'), {
			encoding: 'utf8',
		}),
	)
	const { users } = db

	const user = users.find((u) => u.username === username && u.password === password)

	if (user) {
		return res.json(user)
	}

	return res.status(401).json({ message: 'Invalid credentials' })
})

server.use(router)

server.listen(8000, () => {
	console.log('JSON Server is running on port 8000')
})
