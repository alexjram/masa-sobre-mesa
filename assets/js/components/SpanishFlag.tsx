import React from "react";

interface Props {
	size: number
}
export default function SpanishFlag({ size }: Props) {
	return (
		<svg width={size} height={size} viewBox="0 0 60 61" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			<defs>
				<path id="7ank8kvgsa" d="M0 .067h59.933V60H0z" />
			</defs>
			<g fill="none" fillRule="evenodd">
				<g transform="translate(0 .489)">
					<mask id="suuqd65n8b" fill="#fff">
						<use xlinkHref="#7ank8kvgsa" />
					</mask>
					<path d="M59.933 30.033C59.933 46.583 46.517 60 29.967 60S0 46.583 0 30.033C0 13.483 13.417.067 29.967.067c16.55 0 29.966 13.416 29.966 29.966" fill="#FFF" mask="url(#suuqd65n8b)" />
				</g>
				<path d="M29.967 2.544c-10.595 0-19.813 5.889-24.562 14.572h49.123C49.78 8.433 40.561 2.544 29.967 2.544M29.967 58.5c10.594 0 19.812-5.889 24.561-14.572H5.405C10.154 52.611 19.372 58.5 29.967 58.5" fill="#FF0D00" />
				<path d="M5.405 43.928h49.124a27.855 27.855 0 0 0 3.416-13.406c0-4.857-1.24-9.425-3.416-13.406H5.405a27.856 27.856 0 0 0-3.416 13.406c0 4.858 1.238 9.425 3.416 13.406" fill="#FFD600" />
			</g>
		</svg>
	)
}
