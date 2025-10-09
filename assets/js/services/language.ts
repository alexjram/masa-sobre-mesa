export const languages = [
	'es',
	'en'
]

export function getOtherLangURL() {
	const actualLang = getLang()

	const otherLang = languages.filter(l => l !== actualLang)

	const url = new URL(window.location.href)
	url.searchParams.set('lang', otherLang[0])
	return url.toString()
}

export function getLang() {
	const def = 'es'
	const url = new URL(window.location.href)

	if (url.searchParams.has('lang')) {
		const lang = url.searchParams.get('lang') + ''
		if (languages.includes(lang))
			return lang
	}
	return def
}

export function getOtherLangAnchor() {
	const changeUrl = getOtherLangURL()
	const url = new URL(changeUrl)
	const langCode = url.searchParams.get('lang')

	const anchor = document.createElement('a')
	anchor.href = changeUrl
	anchor.innerHTML = langCode + ''
	anchor.className = 'font-bold use-font uppercase px-5'

	return anchor
}
