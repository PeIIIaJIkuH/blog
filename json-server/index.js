const fs = require('fs')
const path = require('path')

const express = require('express')
const jsonServer = require('json-server')
const multer = require('multer')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.resolve(__dirname, 'uploads'))
	},
	filename: (req, file, cb) => {
		cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
	},
})

const upload = multer({ storage })

server.use(jsonServer.defaults())
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
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

server.patch('/users/image', upload.single('image'), (req, res) => {
	const { userId, type } = req.body
	const db = JSON.parse(
		fs.readFileSync(path.resolve(__dirname, 'db.json'), {
			encoding: 'utf8',
		}),
	)

	const url = `http://localhost:8000/uploads/${req.file.filename}`

	const { users } = db
	const user = users.find((u) => u.id === userId)

	if (!user) {
		return res.status(404).json({ message: 'User not found' })
	}

	if (type === 'avatar') {
		if (user.avatarUrl) {
			fs.unlinkSync(path.resolve(__dirname, 'uploads', user.avatarUrl.split('/').pop()))
		}
		user.avatarUrl = url
	} else {
		if (user.backgroundUrl) {
			fs.unlinkSync(path.resolve(__dirname, 'uploads', user.backgroundUrl.split('/').pop()))
		}
		user.backgroundUrl = url
	}
	fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db, null, 2))

	return res.json(user)
})

server.use('/uploads', express.static(path.resolve(__dirname, 'uploads')))

server.use((req, res, next) => {
	if (req.url.startsWith('/uploads')) {
		return next()
	}

	if (!req.headers.authorization) {
		return res.status(401).json({ message: 'Unauthorized' })
	}

	next()
})

server.use((req, res, next) => {
	setTimeout(() => {
		next()
	}, 1000)
})

server.use(router)

server.listen(8000, () => {
	console.log('JSON Server is running on port 8000')
})
