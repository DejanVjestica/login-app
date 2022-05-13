import React, { useContext } from 'react'

import { AuthContext } from './context/auth-content'

import { Login } from './components/Login/Login'
import { Home } from './components/Home/Home'
import { MainHeader } from './components/MainHeader/MainHeader'

export function App() {
	const context = useContext(AuthContext)
	return (
		<>
			<MainHeader />
			<main>
				{!context.isLoggedIn && (
					<Login onLogin={context.onLogin} />
				)}
				{context.isLoggedIn && <Home />}
			</main>
		</>
	)
}
