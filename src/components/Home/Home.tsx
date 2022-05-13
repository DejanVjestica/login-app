import React, { useContext } from 'react'

import Card from '../UI/Card/Card'
import classes from './Home.module.scss'
import { AuthContext } from '../../context/auth-content'

const Home = () => {
	const context = useContext(AuthContext)
	return (
		<Card className={classes.home}>
			<h1>Welcome back!</h1>
			<button onClick={context.onLogout}>Logout</button>
		</Card>
	)
}

export default Home
