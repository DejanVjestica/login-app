/* eslint-disable react/display-name */
import React, { useRef, useImperativeHandle } from 'react'

import classes from './Input.module.scss'

interface InputProps extends React.ComponentProps<'input'> {
	label: string
	isValid: boolean
}

export const Input = React.forwardRef((props: InputProps, ref) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const activate = (): void => {
		inputRef.current?.focus()
	}

	useImperativeHandle(ref, () => {
		return { focus: activate }
	})

	return (
		<div
			className={`${classes.control} ${
				props.isValid === false ? classes.invalid : ''
			}`}>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				ref={inputRef}
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
			/>
		</div>
	)
})
