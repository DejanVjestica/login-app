// Component props type
export type LoginProps = {
	onLogin: (email: string, password: string) => void
}

// Types for EmailReduser
export type EmailReducerState = {
	value: string
	isValid: boolean
}

type AddEmailAction = {
	type: 'EMAIL_CHANGE'
	value: string
}

type ValidateEmailAction = {
	type: 'EMAIL_BLUR'
}

export type EmailReducerAction = AddEmailAction | ValidateEmailAction

// Types for PasswordReducer
export type PassReducerState = {
	value: string
	isValid: boolean
}

type AddPassAction = {
	type: 'PASSWORD_CHANGE'
	value: string
}

type ValidatePassAction = {
	type: 'PASSWORD_BLUR'
}

export type PassReducerAction = AddPassAction | ValidatePassAction
