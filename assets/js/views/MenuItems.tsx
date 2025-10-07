import React, { useRef, useState } from 'react'
import MenuIcon from '../components/MenuIcon'
import Menu from './Menu'
import Scrollable from '../components/Scrollable'
import LeftArrow from '../components/LeftArrow'
import RightArrow from '../components/RightArrow'
import Food from '../components/Food'
import type { Food as FoodType } from '../App'

interface Props {
	name: string
	foods: FoodType[]
	onChange: (type: string) => void
	types: string[]
}
export default function MenuItems({ name, foods, onChange, types }: Props) {
	const [showMenu, setShowMenu] = useState(false)
	const contentRef = useRef<HTMLDivElement>(null)
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
	const handleLeftButton = () => {
		if (contentRef.current) {
			contentRef.current.scrollBy({ left: -100, behavior: 'smooth' })
		}
	}
	const handleRightButton = () => {
		if (contentRef.current) {
			contentRef.current.scrollBy({ left: 100, behavior: 'smooth' })
		}
	}
	return (
		<div className="w-full h-full relative">
			<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-stretch">
				<button className='absolute left-4 top-1/2 translate-y-[-50%] z-10 hidden lg:block' onClick={handleLeftButton}>
					<LeftArrow />
				</button>
				<button className='absolute right-4 top-1/2 translate-y-[-50%] z-10 hidden lg:block' onClick={handleRightButton}>
					<RightArrow />
				</button>


				<div className="flex-shrink-0 flex-grow-0 bg-white py-2 lg::hidden">
					{!showMenu ? (<h2 className="text-center text-2xl flex justify-center">
						<span className="mr-3">{name}</span>
						{' '}<MenuIcon onPress={handleOpenMenu} />
					</h2>) : (
						<h2 className="text-center text-2xl flex justify-center">
							<button onClick={handleCloseMenu}>CERRAR</button>
						</h2>
					)}
				</div>
				<Scrollable showMenu={showMenu} ref={contentRef}>
					<ul className="flex flex-col lg:flex-row lg:h-full whitespace-nowrap">
						{foods.map((food, index) => (
							<Food food={food} key={index} />
						))}
					</ul>
					<div className={`absolute w-full h-full bottom-0 top-0 ${showMenu ? 'z-auto' : '-z-10'}`}>
						<Menu types={types} onChange={handleMenuChange} visible={showMenu} isInternal={true} />
					</div>
				</Scrollable>

			</div>

		</div>
	)
}
