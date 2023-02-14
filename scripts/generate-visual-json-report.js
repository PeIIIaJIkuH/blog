const { readdir, writeFile } = require('fs')
const { join: joinPath, relative } = require('path')
const { promisify } = require('util')

const asyncReaddir = promisify(readdir)
const writeFileAsync = promisify(writeFile)

const lokiDir = joinPath(__dirname, '..', '.loki')
const actualDir = joinPath(lokiDir, 'reference')
const expectedDir = joinPath(lokiDir, 'current')
const diffDir = joinPath(lokiDir, 'difference')

;(async function main() {
	const diffs = await asyncReaddir(diffDir)

	await writeFileAsync(
		joinPath(lokiDir, 'report.json'),
		JSON.stringify({
			newItems: [],
			deletedItems: [],
			passedItems: [],
			failedItems: diffs,
			expectedItems: diffs,
			actualItems: diffs,
			diffItems: diffs,
			actualDir: relative(lokiDir, actualDir),
			expectedDir: relative(lokiDir, expectedDir),
			diffDir: relative(lokiDir, diffDir),
		}),
	)
})()
