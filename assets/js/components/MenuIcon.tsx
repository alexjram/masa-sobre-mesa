import React from 'react'

interface Props {
    onPress: () => void
}
export default function MenuIcon({onPress}: Props) {

    return (
        <button onClick={onPress}>
            <svg width="32" viewBox="0 0 45 33" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#E9B4D2" strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round">
                    <path d="M3.5 3.5h38M3.5 16.5h38M3.5 29.5h38" />
                </g>
            </svg>
        </button>
    )
}