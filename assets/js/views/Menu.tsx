import React from 'react'

interface Props {
	onChange: (item: string) => void
	types: string[],
	visible: boolean
	isInternal: boolean
}
export default function Menu({ onChange, types, visible, isInternal }: Props) {

	if (!visible) {
		return <div className="opacity-0 -z-10 ease-in-out duration-300" />
	}
	return (
		<div className='flex flex-col h-full'>
			<div className="flex flex-col flex-grow flex-shrink md:flex-row items-stretch md:items-center h-full justify-around opacity-100 ease-in-out duration-300 menu-bg w-full md:w-screen">
				{types.map((type, index) => (
					<div key={index} className="blob-bg flex items-center justify-center mx-[15%] p-0 md:mx-0 md:px-[5%] max-w-full box-border max-h-[160px] md:max-h-none" onClick={() => onChange(type)}>
						<h3 className="text-2xl font-bold">{type}</h3>
					</div>
				))}
			</div>
			{!isInternal && (<div className='flex-shrink-0 flex-grow-0 py-5 bg-pink-300 flex items-center justify-center'>
				<p className='use-font'>Calle Arica 399, Miraflores</p>
			</div>)}
		</div>
	)
}
