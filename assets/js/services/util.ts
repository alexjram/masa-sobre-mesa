

export function randomString(length: number) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345689'

	let result = ''
	const charLenght = characters.length
	for (let i = 0; i < charLenght; i++) {
		result += characters.charAt(Math.floor(Math.random() * charLenght))
	}
	return result
}
