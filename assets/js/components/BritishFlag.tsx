import React from 'react'
import { randomString } from '../services/util'

interface Props {
	size: number
}
export default function BritishFlag({ size }: Props) {
	const id = randomString(6)
	const id2 = randomString(6)
	return (
		<svg width={size} height={size} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			<defs>
				<path d="M.294 28.106c0 15.31 12.411 27.722 27.721 27.722 15.311 0 27.722-12.411 27.722-27.722 0-15.31-12.41-27.721-27.722-27.721C12.705.385.294 12.796.294 28.106z" id={id} />
			</defs>
			<g fill="none" fillRule="evenodd">
				<path d="M59.91 29.692c0 16.398-13.294 29.691-29.693 29.691C13.82 59.383.526 46.09.526 29.692S13.819 0 30.217 0C46.616 0 59.91 13.294 59.91 29.692" fill="#FFF" />
				<g transform="translate(2.202 1.585)">
					<mask id={`${id2}`} fill="#fff">
						<use xlinkHref={`#${id}`} />
					</mask>
					<path fill="#00237C" mask={`url(#${id2})`} d="M-14.312 18.071H21V-.817h-35.31z" />
					<path fill="#FFF" mask={`url(#${id2})`} d="M-4.62-.817h-9.692v5.94l47.286 31.221 11.508-4.738z" />
					<path fill="#CF142B" mask={`url(#${id2})`} d="M-14.312-.321v4.083l47.913 31.636 1.874-2.844z" />
					<path fill="#00237C" mask={`url(#${id2})`} d="M35.436 18.071H70.75V-.817H35.436z" />
					<path fill="#FFF" mask={`url(#${id2})`} d="M61.06-.817h9.69v5.94L23.465 36.343l-11.508-4.738z" />
					<path fill="#CF142B" mask={`url(#${id2})`} d="M70.75-.321v4.083L22.84 35.398l-1.88-2.844z" />
					<path fill="#00237C" mask={`url(#${id2})`} d="M35.436 56.13H70.75V37.24H35.436z" />
					<path fill="#FFF" mask={`url(#${id2})`} d="M61.06 56.13h9.69v-5.94L23.465 18.967l-11.508 4.738z" />
					<path fill="#CF142B" mask={`url(#${id2})`} d="M70.75 55.633v-4.082L22.84 19.914l-1.88 2.845z" />
					<path fill="#00237C" mask={`url(#${id2})`} d="M-14.312 56.13H21V37.24h-35.31z" />
					<path fill="#FFF" mask={`url(#${id2})`} d="M-4.62 56.13h-9.692v-5.94l47.286-31.222 11.508 4.738z" />
					<path fill="#CF142B" mask={`url(#${id2})`} d="M-14.312 55.633v-4.082l47.913-31.637 1.874 2.845z" />
					<path fill="#FFF" mask={`url(#${id2})`} d="M70.75 18.07H35.51V-.816H20.788V18.07h-35.099v18.745h35.099v19.313H35.51V36.816h35.24z" />
					<path fill="#CF142B" mask={`url(#${id2})`} d="M70.75 21.904H32.386V-.816h-8.475v22.72h-38.223v11.077h38.223v23.148h8.475V32.981H70.75z" />
				</g>
			</g>
		</svg>
	)
}
