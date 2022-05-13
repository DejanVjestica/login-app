import React from 'react'

import classes from './Button.module.scss'
interface ButtonProps extends React.ComponentProps<'button'> {
	children: React.ReactNode
}

export const Button: React.FunctionComponent<ButtonProps> = (
	props: ButtonProps
) => {
	return (
		<button
			type={props.type || 'button'}
			className={`${classes.button} ${props.className}`}
			onClick={props.onClick}
			disabled={props.disabled}>
			{props.children}
		</button>
	)
}
