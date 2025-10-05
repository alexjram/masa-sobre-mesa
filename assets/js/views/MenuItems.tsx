import React, { useRef, useState } from 'react'
import MenuIcon from '../components/MenuIcon'
import Menu from './Menu'
import Scrollable from '../components/Scrollable'
import LeftArrow from '../components/LeftArrow'
import RightArrow from '../components/RightArrow'

interface Props {
	name: string
	foods: {
		name: string
		desc: string
		image?: string
	}[]
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
				<button className='absolute left-4 top-1/2 translate-y-[-50%] z-10 hidden md:block' onClick={handleLeftButton}>
					<LeftArrow />
				</button>
				<button className='absolute right-4 top-1/2 translate-y-[-50%] z-10 hidden md:block' onClick={handleRightButton}>
					<RightArrow />
				</button>


				<div className="flex-shrink-0 flex-grow-0 bg-white py-2 md:hidden">
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
					<ul className="flex flex-col md:flex-row md:h-full whitespace-nowrap">
						{foods.map((food, index) => (
							<li key={index} className="relative overflow-hidden group/food md:h-full md:flex-shrink-0 md:aspect-square">
								<img src={food.image} alt={food.name} className="aspect-square object-cover group-hover/food:scale-150 ease-in-out duration-300" />
								<div className="absolute w-full bottom-0 pink-blob-bg px-3 py-3 -translate-x-1/3 md:translate-x-0 group-hover/food:translate-x-0 ease-in-out duration-300">
									<h3 className="text-center uppercase md:text-xl">{food.name}</h3>
									<p className="text-center max-h-0 overflow-hidden group-hover/food:max-h-80 group-hover/food:mt-1 ease-in-out duration-200 px-5 md:px-[12%] whitespace-normal text-[13px]">{food.desc}</p>
								</div>
							</li>
						))}
					</ul>
					<div className={`absolute w-full h-full bottom-0 top-0 ${showMenu ? 'z-auto' : '-z-10'}`}>
						<Menu types={types} onChange={handleMenuChange} visible={showMenu} />
					</div>
				</Scrollable>

			</div>

		</div>
	)
}
