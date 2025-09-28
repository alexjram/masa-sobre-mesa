import React from 'react'

interface Props {
    onChange: (item: string) => void
    types: string[]
}
export default function Menu({onChange, types}: Props) {

    return (
        <div className="flex flex-col items-stretch h-full justify-around">
            {types.map((type, index) => (
                <div key={index} className="blob-bg flex items-center justify-center" onClick={() => onChange(type)}>
                    <h3 className="text-5xl font-bold">{type}</h3>
                </div>
            ))}
        </div>
    )
}