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

server.patch('/profile/image', upload.single('image'), (req, res) => {
	const db = JSON.parse(
		fs.readFileSync(path.resolve(__dirname, 'db.json'), {
			encoding: 'utf8',
		}),
	)

	const url = `http://localhost:8000/uploads/${req.file.filename}`

	const { profile } = db

	if (req.body.type === 'avatar') {
		if (profile.avatarUrl) {
			fs.unlinkSync(path.resolve(__dirname, 'uploads', profile.avatarUrl.split('/').pop()))
		}
		profile.avatarUrl = url
	} else {
		if (profile.backgroundUrl) {
			fs.unlinkSync(path.resolve(__dirname, 'uploads', profile.backgroundUrl.split('/').pop()))
		}
		profile.backgroundUrl = url
	}
	fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db, null, 2))

	return res.json(profile)
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

server.use(router)

server.listen(8000, () => {
	console.log('JSON Server is running on port 8000')
})
