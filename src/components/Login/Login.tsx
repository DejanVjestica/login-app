import React, { useState, useReducer, useEffect, useContext } from 'react'

import { Card } from '../UI/Card/Card'
import { Button } from '../UI/Button/Button'
import { AuthContext } from '../../context/auth-content'

import classes from './Login.module.scss'

import {
	EmailReducerState,
	EmailReducerAction,
	PassReducerState,
	PassReducerAction
} from './Login.types'

const emailReducer = (state: EmailReducerState, action: EmailReducerAction) => {
	switch (action.type) {
		case 'EMAIL_CHANGE':
			return {
				value: action.value,
				isValid: action.value.includes('@')
			}
		case 'EMAIL_BLUR':
			return {
				value: state.value,
				isValid: state.value.includes('@')
			}
		default:
			return state
	}
}

const passReducer = (state: PassReducerState, action: PassReducerAction) => {
	switch (action.type) {
		case 'PASSWORD_CHANGE':
			return {
				value: action.value,
				isValid: action.value.trim().length > 6
			}
		case 'PASSWORD_BLUR':
			return {
				value: state.value,
				isValid: state.value.trim().length > 6
			}
		default:
			return state
	}
}

export const Login = () => {
	const [formIsValid, setFormIsValid] = useState<boolean>(false)

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: false
	})

	const [passState, dispatchPass] = useReducer(passReducer, {
		value: '',
		isValid: false
	})

	const context = useContext(AuthContext)

	const { isValid: emailIsValid } = emailState
	const { isValid: passIsValid } = passState

	useEffect(() => {
		const identifier = setTimeout(() => {
			setFormIsValid(emailIsValid && passIsValid)
		}, 500)

		return () => {
			clearTimeout(identifier)
		}
	}, [emailIsValid, passIsValid])

	const validateEmailHandler = () => {
		dispatchEmail({ type: 'EMAIL_BLUR' })
	}

	const validatePasswordHandler = () => {
		dispatchPass({ type: 'PASSWORD_BLUR' })
	}

	const emailChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatchEmail({
			type: 'EMAIL_CHANGE',
			value: event.target.value
		})
	}

	const passwordChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatchPass({
			type: 'PASSWORD_CHANGE',
			value: event.target.value
		})
	}

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		context.onLogin(emailState.value, passState.value)
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false
							? classes.invalid
							: ''
					}`}>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passState.isValid === false
							? classes.invalid
							: ''
					}`}>
					<label htmlFor="password">
						Password
					</label>
					<input
						type="password"
						id="password"
						value={passState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
						disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}
