import { useState, useCallback } from 'react'
import { Sidebar, Navbar } from './components'
import './styles/common.scss'

const App = () => {
	const [isSidebarVisible, setSidebarVisibility] = useState(true)

	const sidebarVisibilteToggle = useCallback(
		() => setSidebarVisibility((prevState) => !prevState),
		[],
	)
	return (
		<div className='container'>
			{isSidebarVisible ? (
				<Navbar sidebarVisibilteToggle={sidebarVisibilteToggle} />
			) : (
				<Sidebar sidebarVisibilteToggle={sidebarVisibilteToggle} />
			)}
		</div>
	)
}

export default App
