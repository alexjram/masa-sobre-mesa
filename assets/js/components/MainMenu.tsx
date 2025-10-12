import React from "react";
import BritishFlag from './BritishFlag'
import SpanishFlag from './SpanishFlag'
import { getOtherLang, getOtherLangURL } from "../services/language";

interface Props {
	foodTypes: string[]
	selectedType: string | null | undefined
	onSelectingType: (type: string) => void
}
export default function MainMenu({ foodTypes, selectedType, onSelectingType }: Props) {

	const lang = getOtherLang()
	const handleItemClick = (ev: React.MouseEvent, type: string) => {
		ev.preventDefault()
		onSelectingType(type)

	}

	return (
		<header className="flex-0 bg-white px-4 border">
			<div className={`mx-auto lg:px-[63px] flex justify-center items-center min-h-[40px] w-full ${selectedType ? 'lg:justify-between' : ''}`}>
				<div className="w-[70%] lg:w-[346px] py-[12%] lg:py-10">
								<img src="/wp-content/themes/masa-sobre-mesa/assets/img/logo.svg" alt="masa sobre mesa" />
				</div>
				<div className={!selectedType ? "hidden lg:flex text-right w-0 absolute top-0 overflow-hidden" : "hidden lg:flex text-right"}>
					{foodTypes.map(foodType => (
						<a key={foodType} href="#" className={`font-bold use-font uppercase px-5 ${foodType === selectedType ? 'text-[#b1a979]' : 'text-black'}`} onClick={ev => handleItemClick(ev, foodType)}>{foodType}</a>
					))}
					<a href={getOtherLangURL()} className="font-bold use-font uppercase px-5 flex">
						{lang.toLowerCase() === 'en' ? (
							<BritishFlag size={25} />
						) : (
							<SpanishFlag size={25} />
						)}
						<span className="ml-2">{lang}</span>
					</a>
				</div>
			</div>
		</header>
	)
}

