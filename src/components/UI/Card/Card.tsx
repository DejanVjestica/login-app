import React from 'react'

import classes from './Card.module.scss'

type CardProps = {
	className?: string
	children: React.ReactNode
}

export const Card = (props: CardProps) => {
	return (
		<div className={`${classes.card} ${props.className}`}>
			{props.children}
		</div>
	)
}
