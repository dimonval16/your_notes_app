import {
    CHANGE_EMAIL_INPUT,
    CHANGE_PASSWORD_INPUT,
    LOG_OUT,
} from '../actions';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case CHANGE_EMAIL_INPUT:
            return {
                ...state,
                email: action.inputValue
            };

        case CHANGE_PASSWORD_INPUT:
            return {
                ...state,
                pass: action.inputValue
            }

        case LOG_OUT:
            return {
                ...state,
                email: '',
                pass: ''
            }

        default:
            return {...state};
    }
}