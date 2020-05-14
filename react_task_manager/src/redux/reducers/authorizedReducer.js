import {
    LOGIN_SUCCESS,
    SIGN_UP_SUCCESS,
    LOG_OUT
} from '../actions'

export default function reducer(state = { status: false }, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: true
            }

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                status: true
            }

        case LOG_OUT:
            return {
                ...state,
                status: false
            }

        default:
            return {...state}
    }
}