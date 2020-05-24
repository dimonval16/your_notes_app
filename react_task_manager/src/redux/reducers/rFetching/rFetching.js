import {
    LOADING,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SIGN_UP_FAILURE,
    ACTIVATE_MODAL_WINDOW,
    GET_USER_INFO
} from "../../actions";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                status: true
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                status: false
            }

        case  LOGIN_SUCCESS:
            return {
                ...state,
                status: false
            }

        case SIGN_UP_FAILURE:
            return {
                ...state,
                status: false
            }

        case ACTIVATE_MODAL_WINDOW:
            return {
                ...state,
                status: false
            }

        case GET_USER_INFO:
            return {
                ...state,
                status: false
            }

        default:
            return state;
    }
}