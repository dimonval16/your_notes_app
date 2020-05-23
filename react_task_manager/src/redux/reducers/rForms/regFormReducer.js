import {
    CHANGE_REG_EMAIL_INPUT,
    CHANGE_REG_NAME_INPUT,
    CHANGE_REG_PASSWORD_INPUT,
    CHANGE_CONFIRM_PASSWORD_INPUT,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOG_OUT
} from '../../actions'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case CHANGE_REG_EMAIL_INPUT:
            return {
                ...state,
                email: action.inputValue,
                errorTitle: ''
            }

        case CHANGE_REG_NAME_INPUT:
            return {
                ...state,
                name: action.inputValue,
                errorTitle: ''
            }

        case CHANGE_REG_PASSWORD_INPUT:
            return {
                ...state,
                pass: action.inputValue,
                errorTitle: ''
            }

        case CHANGE_CONFIRM_PASSWORD_INPUT:
            return{
                ...state,
                confirmPass: action.inputValue,
                errorTitle: ''
            }

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                email: '',
                name: '',
                pass: '',
                confirmPass: '',
                errorTitle: ''
            }

        case LOG_OUT:
            return {
                ...state,
                email: '',
                name: '',
                pass: '',
                confirmPass: '',
                errorTitle: ''
            }

        case SIGN_UP_FAILURE:
            return {
                ...state,
                errorTitle: `${action.response.message}.`
            }

        default:
            return {...state}
    }
}