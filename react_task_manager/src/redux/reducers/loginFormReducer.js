import {
    CHANGE_EMAIL_INPUT,
    CHANGE_PASSWORD_INPUT,
    LOGIN_SUCCESS,
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

        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true
            }

        case LOG_OUT:
            localStorage.removeItem('accessToken');
            action.history.push('/main');

            return {
                ...state,
                isAuth: false,
                email: '',
                pass: ''
            }

        default:
            return {...state};
    }
}