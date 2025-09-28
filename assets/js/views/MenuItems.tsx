import React from 'react'

interface Props {
    name: string
    foods: {
        name: string
        desc: string
        image?: string
    }[]
}
export default function MenuItems({ name, foods }: Props) {
    return (
        <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col">
                <div className="flex-shrink-0 flex-grow-0 bg-white">
                    <h2 className="text-center text-xl">{name}</h2>
                </div>
                <ul className="flex flex-wrap flex-grow flex-shrink overflow-auto">
                    {foods.map((food, index) => (
                        <li key={index} className="relative overflow-hidden">
                            <img src={food.image} alt={food.name} className="aspect-square object-cover" />
                            <div className="absolute bottom-[-30px] w-full bg-pink-500">
                                <h3 className="text-center">{food.name}</h3>
                                <p className="text-center">{food.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}