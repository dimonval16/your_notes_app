import {
    CHANGE_REG_EMAIL_INPUT,
    CHANGE_REG_NAME_INPUT,
    CHANGE_REG_PASSWORD_INPUT,
    CHANGE_CONFIRM_PASSWORD_INPUT
} from '../actions'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case CHANGE_REG_EMAIL_INPUT:
            return {
                ...state,
                email: action.inputValue
            }

        case CHANGE_REG_NAME_INPUT:
            return {
                ...state,
                name: action.inputValue
            }

        case CHANGE_REG_PASSWORD_INPUT:
            return {
                ...state,
                pass: action.inputValue
            }

        case CHANGE_CONFIRM_PASSWORD_INPUT:
            return{
                ...state,
                confirmPass: action.inputValue
            }

        default:
            return {...state}
    }
}