/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import Card from '../UI/Card/Card'
import classes from './Home.module.scss'

type HomeProps = {
	onLogout: () => void
}

const Home = (props: HomeProps) => {
	return (
		<Card className={classes.home}>
			<h1>Welcome back!</h1>
		</Card>
	)
}

export default Home
