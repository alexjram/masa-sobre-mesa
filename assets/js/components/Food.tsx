import React from 'react'
import type { Food as FoodType } from '../App'
interface Props {
	food: FoodType
	active: boolean
	onClick: () => void
}
export default function Food({ food, active, onClick }: Props) {

	return (
		<li className="relative overflow-hidden lg:h-full lg:flex-shrink-0 aspect-square" onClick={onClick}>
			<img src={food.image} alt={food.name} className={`aspect-square object-cover ${active ? 'opacity-0' : 'opacity-100'} ease-in-out duration-300 absolute top-0 left-0`} />
			<img src={food.image2} alt={food.name} className={`aspect-square object-cover ${active ? 'opacity-100' : 'opacity-0'} ease-in-out duration-300 absolute top-0 left-0`} />

			<div className={`absolute w-full bottom-0 px-3 ${active ? 'py-7 translate-x-0' : 'pt-6 pb-3 -translate-x-1/4 md:translate-x-0'} ease-in-out duration-300`}>
				<div className='pink-blob-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-full z-0' />
				<h3 className="text-center uppercase lg:text-xl mx-auto w-[45%] whitespace-normal relative z-10">{food.name}</h3>
				<p className={`text-center overflow-hidden ${active ? 'max-h-80 mt-5' : 'max-h-0 mt-0'} ease-in-out duration-200 px-5 lg:px-[12%] whitespace-normal text-[13px] relative z-10`}>{food.desc}</p>
			</div>
		</li>
	)
}
