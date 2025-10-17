import React from 'react'
import type { Food as FoodType } from '../App'
interface Props {
	food: FoodType
}
export default function Food({ food }: Props) {

	return (
		<li className="relative overflow-hidden lg:h-full lg:flex-shrink-0 aspect-square group/food">
			<img src={food.image} alt={food.name} className={`aspect-square object-cover opacity-100 group-hover/food:opacity-0 ease-in-out duration-300 absolute top-0 left-0`} />
			<img src={food.image2} alt={food.name} className={`aspect-square object-cover opacity-0 group-hover/food:opacity-100 ease-in-out duration-300 absolute top-0 left-0`} />

			<div className={`absolute w-full bottom-0 px-3 pt-6 pb-3 -translate-x-1/4 md:translate-x-0 group-hover/food:py-7 group-hover/food:translate-x-0 ease-in-out duration-300`}>
				<div className='pink-blob-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-full z-0' />
				<h3 className="text-center uppercase lg:text-xl mx-auto w-[45%] whitespace-normal relative z-10">{food.name}</h3>
				<p className={`text-center overflow-hidden max-h-0 mt-0 group-hover/food:max-h-80 group-hover/food:mt-5 ease-in-out duration-200 px-5 lg:px-[12%] whitespace-normal text-[13px] relative z-10`}>{food.desc}</p>
			</div>
		</li>
	)
}
