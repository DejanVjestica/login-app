import React, { useContext } from 'react'

import { Card } from '../UI/Card/Card'
import { Button } from '../UI/Button/Button'

import { AuthContext } from '../../context/auth-content'

import classes from './Home.module.scss'

export const Home = () => {
	const context = useContext(AuthContext)
	return (
		<Card className={classes.home}>
			<h1>Welcome back!</h1>
			<Button onClick={context.onLogout}>Logout</Button>
		</Card>
	)
}
