/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react'

type AuthContextType = {
	isLoggedIn: boolean
	onLogout: () => void
	onLogin: (email: string, password: string) => void
}

export const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: () => {}
} as AuthContextType)

type AuthProviderProps = {
	children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

	useEffect(() => {
		const checkIfLoggedIn = localStorage.getItem('isLoggedIn')

		if (checkIfLoggedIn === 'true') {
			setIsLoggedIn(true)
		}
	}, [isLoggedIn])

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}

	const loginHandler = (email: string, password: string) => {
		localStorage.setItem('isLoggedIn', 'true')
		setIsLoggedIn(true)
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler
			}}>
			{children}
		</AuthContext.Provider>
	)
}
