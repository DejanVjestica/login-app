import React from 'react'

import classes from './Input.module.scss'

interface InputProps extends React.ComponentProps<'input'> {
	children: React.ReactNode
	isValid: boolean
}

export const Input = (props: InputProps) => {
	return (
		<div
			className={`${classes.control} ${
				props.isValid === false ? classes.invalid : ''
			}`}>
			<label htmlFor={props.id}>{props.children}</label>
			<input
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
			/>
		</div>
	)
}
