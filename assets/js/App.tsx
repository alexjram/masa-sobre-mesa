import React, { useEffect } from 'react'
import Menu from './views/Menu'
import MenuItems from './views/MenuItems'

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
	useEffect(() => {
		const mainMenu = document.getElementById('main-menu') as HTMLDivElement
		if (mainMenu) {
			mainMenu.innerHTML = ''
			mainMenu.classList.add('absolute')
			mainMenu.classList.add('w-0')
			mainMenu.classList.add('top-0')
			types.forEach(type => {
				const node = document.createElement('a')
				node.href = '#'
				node.innerText = type.name
				node.className = 'font-bold use-font uppercase px-5'
				node.onclick = ev => {
					ev.preventDefault()
					handleSelection(type.name)
				}
				mainMenu.appendChild(node)

			})

		}
	}, [types])
	const handleSelection = (name: string) => {
		const foodType = types.find(type => type.name === name)
		if (foodType) {
			setItem(foodType)
			const mainMenu = document.getElementById('main-menu')
			mainMenu?.classList.remove('w-0')
			mainMenu?.classList.remove('absolute')
			mainMenu?.classList.remove('top-0')
			const mainMenuItems = document.querySelectorAll<HTMLAnchorElement>('#main-menu > a')
			mainMenuItems.forEach(mmItem => {
				if (mmItem.textContent === name) {
					mmItem.style.color = '#b1a979'
				} else {
					mmItem.style.color = '#000000'
				}
			})
		}
	}
	if (!item) {
		return <Menu onChange={handleSelection} types={types.map(type => type.name)} visible={true} isInternal={false} />
	}
	return (
		<MenuItems foods={item.foods} name={item.name} onChange={handleSelection} types={types.map(type => type.name)} />
	)
}
