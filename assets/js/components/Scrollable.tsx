import React, { useRef } from 'react'
import useIsMobile from '../hooks/useIsMobile'

interface Props {
	showMenu: boolean
	children: React.ReactNode
	ref: React.RefObject<HTMLDivElement | null>
}
export default function Scrollable({ children, showMenu, ref }: Props) {

	const isMobile = useIsMobile()

	const handleScroll = (event: React.WheelEvent) => {
		if (!isMobile) {
			if (ref.current) {
				ref.current.scrollLeft += event.deltaY;
			}
		}
	}
	let overflowClasses = 'overflow-hidden'
	if (!showMenu) {
		overflowClasses = isMobile ? 'overflow-y-auto overflow-x-hidden' : 'overflow-x-auto overflow-y-hidden'
	}
	return (
		<div
			ref={ref}
			className={`relative w-full h-full flex-grow flex-shrink no-scrollbar ${overflowClasses}`}
			onWheel={handleScroll}
		>
			{children}
		</div>
	)
}
