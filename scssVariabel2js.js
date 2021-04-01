// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

function scssVariable2js(path) {
	if (!fs.existsSync(path)) {
		return
	}
	const file = fs.readFileSync(path)
	const fileStr = file.toString()
	const arr = fileStr.match(/\$.*?;/g)
	return arr.reduce((obj, now) => {
		const [key, value] = now.replace(/^\$|;$/g, '').split(':')
		obj[key.trim()] = value.trim()
		return obj
	}, {})
}

module.exports = scssVariable2js
