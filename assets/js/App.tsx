import React from 'react'
import Menu from './views/Menu'
import MenuItems from './views/MenuItems'
import MainMenu from './components/MainMenu'

interface Type {
	name: string
	id: number
	foods: Food[]
}
interface Props {
	types: Type[]
}
export interface Food {
	name: string
	desc: string
	image: string
	image2: string
	id: number
}
export default function App({ types }: Props) {
	const [item, setItem] = React.useState<Type | undefined>(undefined)
	const handleSelection = (name: string) => {
		const foodType = types.find(type => type.name === name)
		if (foodType) {
			setItem(foodType)
		}
	}
	const typeNames = types.map(type => type.name)

	return (
		<div className='flex flex-col h-full w-screen'>
			<MainMenu foodTypes={typeNames} selectedType={item?.name} onSelectingType={handleSelection} />
			{!item ? (
				<Menu onChange={handleSelection} types={typeNames} visible={true} isInternal={false} />
			) : (
				<MenuItems foods={item.foods} name={item.name} onChange={handleSelection} types={typeNames} />
			)}
		</div>
	)
}
