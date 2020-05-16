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
                status: !state.status
            }

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                status: !state.status
            }

        case LOG_OUT:
            return {
                ...state,
                status: !state.status
            }

        default:
            return {...state}
    }
}