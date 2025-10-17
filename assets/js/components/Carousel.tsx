import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { Food as FoodType } from '../App'
import FoodDesktop from './FoodDesktop'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import useIsMobile from '../hooks/useIsMobile'

interface Props {
	foods: FoodType[]
}

export default function Carousel({ foods }: Props) {
	const [activeFoodIndex, setActiveFoodIndex] = useState(-1)
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		loop: true,

	})
	const handleLeftButton = () => {
		emblaApi?.scrollPrev()
	}
	const handleRightButton = () => {
		emblaApi?.scrollNext()
	}

	return (
		<div className='relative h-full w-full'>
			<button className='absolute left-4 top-1/2 translate-y-[-50%] z-10 hidden lg:block' onClick={handleLeftButton}>
				<LeftArrow />
			</button>
			<button className='absolute right-4 top-1/2 translate-y-[-50%] z-10 hidden lg:block' onClick={handleRightButton}>
				<RightArrow />
			</button>

			<div className='overflow-hidden h-full' ref={emblaRef}>
				<div className='flex h-full'>
					{foods.map((f) => (<FoodDesktop food={f} key={f.id} />))}
				</div>
			</div>
		</div>
	)
}
