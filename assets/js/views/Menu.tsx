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
			<div className="flex flex-col flex-grow flex-shrink lg:flex-row items-stretch lg:items-center h-full justify-around opacity-100 ease-in-out duration-300 menu-bg w-full lg:w-screen">
				{types.map((type, index) => (
					<div key={index} className="blob-bg flex items-center justify-center mx-[15%] p-0 lg:mx-0 lg:px-[8%] max-w-full box-border max-h-[160px] lg:max-h-none" onClick={() => onChange(type)}>
						<h3 className="text-2xl lg:text-3xl font-bold lg:tracking-widest uppercase">{type}</h3>
					</div>
				))}
			</div>
			{!isInternal && (<div className='flex-shrink-0 flex-grow-0 py-5 bg-pink-300 flex items-center justify-center'>
				<p className='use-font'>Calle Arica 399, Miraflores</p>
			</div>)}
		</div>
	)
}
