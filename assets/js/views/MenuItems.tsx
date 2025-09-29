import React, { useState } from 'react'
import MenuIcon from '../components/MenuIcon'
import Menu from './Menu'

interface Props {
    name: string
    foods: {
        name: string
        desc: string
        image?: string
    }[]
    onChange: (type: string) => void
    types: string[]
}
export default function MenuItems({ name, foods, onChange, types }: Props) {
    const [showMenu, setShowMenu] = useState(false)
    const handleOpenMenu = () => {
        setShowMenu(true)
    }
    const handleCloseMenu = () => {
        setShowMenu(false)
    }
    const handleMenuChange = (type: string) => {
        onChange(type)
        setShowMenu(false)
    }
    return (
        <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col">
                <div className="flex-shrink-0 flex-grow-0 bg-white py-2">
                    {!showMenu ? (<h2 className="text-center text-2xl flex justify-center">
                        <span className="mr-3">{name}</span> 
                        {' '}<MenuIcon onPress={handleOpenMenu} />
                    </h2>):(
                        <h2 className="text-center text-2xl flex justify-center">
                            <button onClick={handleCloseMenu}>CERRAR</button>
                        </h2>
                    ) }
                </div>
                <div className="relative h-full w-full">
                <ul className="flex flex-wrap flex-grow flex-shrink overflow-auto">
                    {foods.map((food, index) => (
                        <li key={index} className="relative overflow-hidden group/food">
                            <img src={food.image} alt={food.name} className="aspect-square object-cover group-hover/food:scale-150 ease-in-out duration-300" />
                            <div className="absolute w-full bottom-0 pink-blob-bg px-3 py-3 -translate-x-1/3 group-hover/food:translate-x-0 ease-in-out duration-300">
                                <h3 className="text-center uppercase">{food.name}</h3>
                                <p className="text-center max-h-0 overflow-hidden group-hover/food:max-h-80 group-hover/food:mt-1 ease-in-out duration-200">{food.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={`absolute w-full h-full top-0 ${showMenu? 'z-auto': '-z-10'}`}>
            <Menu types={types} onChange={handleMenuChange} visible={showMenu} />
            </div>
                </div>
                
            </div>
            
        </div>
    )
}