import {
    CHANGE_EMAIL_INPUT,
    CHANGE_PASSWORD_INPUT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOG_OUT
} from '../../actions';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case CHANGE_EMAIL_INPUT:
            return {
                ...state,
                email: action.inputValue,
                errorTitle: ''
            }

        case CHANGE_PASSWORD_INPUT:
            return {
                ...state,
                pass: action.inputValue,
                errorTitle: ''
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                email: '',
                pass: '',
                errorTitle: ''
            }

        case LOG_OUT:
            return {
                ...state,
                email: '',
                pass: '',
                errorTitle: ''
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                errorTitle: `Error ${action.response.status}: ${action.response.message}.`
            }

        default:
            return {...state};
    }
}