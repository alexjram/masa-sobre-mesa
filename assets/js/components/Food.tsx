import React from 'react'
import type { Food as FoodType } from '../App'
interface Props {
	food: FoodType
}
export default function Food({ food }: Props) {

	return (
		<li className="relative overflow-hidden group/food lg:h-full lg:flex-shrink-0 aspect-square">
			<img src={food.image} alt={food.name} className="aspect-square object-cover group-hover/food:opacity-0 ease-in-out duration-300 absolute top-0 left-0" />
			<img src={food.image2} alt={food.name} className="aspect-square object-cover group-hover/food:opacity-100 opacity-0 ease-in-out duration-300 absolute top-0 left-0" />

			<div className="absolute w-full bottom-0 px-3 pt-6 group-hover/food:py-7 pb-3 -translate-x-1/4 md:translate-x-0 group-hover/food:translate-x-0 ease-in-out duration-300">
				<div className='pink-blob-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-full z-10' />
				<h3 className="text-center uppercase lg:text-xl mx-auto w-[45%] whitespace-normal">{food.name}</h3>
				<p className="text-center max-h-0 overflow-hidden group-hover/food:max-h-80 ease-in-out duration-200 px-5 group-hover/food:mt-5 lg:px-[12%] whitespace-normal text-[13px]">{food.desc}</p>
			</div>
		</li>
	)
}
