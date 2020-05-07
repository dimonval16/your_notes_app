import {
    CHANGE_EMAIL_INPUT,
    CHANGE_PASSWORD_INPUT,
    TRY_LOGIN,
    LOG_OUT
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

        case TRY_LOGIN:
            return {
                ...state,
                registered: state.email && state.pass ? !state.registered : state.registered
            }

        case LOG_OUT:
            return {
                ...state,
                registered: !state.registered,
                email: '',
                pass: ''
            }

        default:
            return {...state};
    }

}