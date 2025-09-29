import React from 'react'

interface Props {
    onChange: (item: string) => void
    types: string[],
    visible: boolean
}
export default function Menu({onChange, types, visible}: Props) {

    if (!visible) {
        return <div className="opacity-0 -z-10 ease-in-out duration-300" />
    }
    return (
        <div className="flex flex-col items-stretch h-full justify-around opacity-100 ease-in-out duration-300 menu-bg">
            {types.map((type, index) => (
                <div key={index} className="blob-bg flex items-center justify-center" onClick={() => onChange(type)}>
                    <h3 className="text-5xl font-bold">{type}</h3>
                </div>
            ))}
        </div>
    )
}