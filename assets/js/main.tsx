import React from 'react'
import { createRoot } from "react-dom/client"
import App from './App'

const root = document.getElementById('react-root')
alert(JSON.stringify(globalTerms))
if (root) {
	createRoot(root).render(<App types={globalTerms} />)
}
