import React from 'react'
import Menu from './views/Menu'
import MenuItems from './views/MenuItems'

interface Type {
    name: string
    id: number
    foods: {
        name: string
        desc: string
        image: string
    }[]
}
interface Props {
    types: Type[]
}
export default function App({types}: Props) {
    const [item, setItem] = React.useState(undefined)
    const handleSelection = (name: string) => {
        const foodType = types.find(type => type.name === name)
        if (foodType) {
            setItem(foodType)
        }
    }
    if (!item) {
        return <Menu onChange={handleSelection} types={types.map(type => type.name)} visible={true} />
    }
    return (
        <MenuItems foods={item.foods} name={item.name} onChange={handleSelection} types={types.map(type => type.name)} />
    )
}