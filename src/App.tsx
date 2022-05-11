/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

	useEffect(() => {
		const checkIfLoggedIn = localStorage.getItem('isLoggedIn')

		if (checkIfLoggedIn === 'true') {
			setIsLoggedIn(true)
		}
	}, [isLoggedIn])

	const loginHandler = (email: string, password: string) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem('isLoggedIn', 'true')
		setIsLoggedIn(true)
	}

	const logoutHandler = () => {
		setIsLoggedIn(false)
		localStorage.setItem('isLoggedIn', 'false')
	}

	return (
		<React.Fragment>
			<MainHeader
				isAuthenticated={isLoggedIn}
				onLogout={logoutHandler}
			/>
			<main>
				{!isLoggedIn && (
					<Login onLogin={loginHandler} />
				)}
				{isLoggedIn && (
					<Home onLogout={logoutHandler} />
				)}
			</main>
		</React.Fragment>
	)
}

export default App
