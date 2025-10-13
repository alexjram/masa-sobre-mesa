import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '../components/MenuIcon'
import Menu from './Menu'
import Scrollable from '../components/Scrollable'
import Food from '../components/Food'
import type { Food as FoodType } from '../App'
import useIsMobile from '../hooks/useIsMobile'
import Carousel from '../components/Carousel'

interface Props {
	name: string
	foods: FoodType[]
	onChange: (type: string) => void
	types: string[]
	onScroll: (hasScrolled: boolean) => void
}
export default function MenuItems({ name, foods, onChange, types, onScroll }: Props) {
	const [showMenu, setShowMenu] = useState(false)
	const contentRef = useRef<HTMLDivElement>(null)
	const isMobile = useIsMobile(1024)
	useEffect(() => {
		const scrollHandler = () => {
			onScroll(!!contentRef && !!contentRef.current && contentRef.current.scrollTop > 0)
		}
		if (contentRef && contentRef.current) {
			contentRef.current.addEventListener('scroll', scrollHandler)
		}
		return () => {
			if (contentRef && contentRef.current) {
				contentRef.current.removeEventListener('scroll', scrollHandler)
			}
		}
	}, [contentRef])
	const handleOpenMenu = () => {
		if (contentRef.current) {
			contentRef.current.scrollTo({ top: 0, behavior: 'instant' })
		}
		setShowMenu(true)
	}
	const handleCloseMenu = () => {
		setShowMenu(false)
	}
	const handleMenuChange = (type: string) => {
		onChange(type)
		setShowMenu(false)
	}
	return (
		<div className="w-full h-full relative">
			<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-stretch">
				<div className="flex-shrink-0 flex-grow-0 bg-white py-2 lg:hidden">
					{!showMenu ? (<h2 className="text-center text-2xl flex justify-center">
						<span className="mr-3">{name}</span>
						{' '}<MenuIcon onPress={handleOpenMenu} />
					</h2>) : (
						<h2 className="text-center text-2xl flex justify-center">
							<button onClick={handleCloseMenu}>CERRAR</button>
						</h2>
					)}
				</div>
				{isMobile ? (
					<Scrollable showMenu={showMenu} ref={contentRef}>
						<ul className="flex flex-col lg:flex-row lg:h-full whitespace-nowrap">
							{foods.map((food) => (
								<Food food={food} key={food.id} />
							))}
						</ul>
						<div className={`absolute w-full h-full bottom-0 top-0 ${showMenu ? 'z-auto' : '-z-10'}`}>
							<Menu types={types} onChange={handleMenuChange} visible={showMenu} />
						</div>
					</Scrollable>
				) : (
					<Carousel foods={foods} />
				)}

			</div>

		</div>
	)
}
